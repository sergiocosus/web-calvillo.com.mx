import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { SideDrawerService } from '~/shared/services/side-drawer.service';
import { registerElement } from 'nativescript-angular/element-registry';
import { NavigationEnd, Router } from '@angular/router';
import * as utils from 'tns-core-modules/utils/utils';
import { UtilsService } from '~/shared/services/utils.service';
import { filter } from 'rxjs/operators';

require('nativescript-localstorage');

registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);
registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
              private fonticon: TNSFontIconService,
              private sideDrawerService: SideDrawerService,
              private router: Router,
              private utilsService: UtilsService) {
    this.utilsService.monitorConnectivity();
    this.utilsService.handleOpenUrl();
  }


  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.sideDrawerService.sideDrawer = this.drawer;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(val => val instanceof NavigationEnd))
      .subscribe(() => {
        utils.ad.dismissSoftInput();
        // this.utilsService.checkConnectivity();
    })
  }

  ngOnDestroy(): void {
    this.utilsService.cancelCheckConnectivity()
  }

}
