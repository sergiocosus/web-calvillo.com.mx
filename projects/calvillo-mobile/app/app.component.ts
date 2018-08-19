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
import { initializeOnAngular } from 'nativescript-web-image-cache';
import { registerElement } from 'nativescript-angular/element-registry';
import { Router } from '@angular/router';
import * as utils from 'tns-core-modules/utils/utils';
import { UtilsService } from '~/shared/services/utils.service';

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
    initializeOnAngular();
    this.utilsService.checkConnectivity();
  }


  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.sideDrawerService.sideDrawer = this.drawer;

    this._changeDetectionRef.detectChanges();
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      utils.ad.dismissSoftInput();
    })
  }

  ngOnDestroy(): void {
    this.utilsService.cancelCheckConnectivity()
  }

}
