import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { SideDrawerService } from '~/shared/services/side-drawer.service';
import { initializeOnAngular } from 'nativescript-web-image-cache';
import { registerElement } from 'nativescript-angular/element-registry';

require('nativescript-localstorage');

registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);
registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements AfterViewInit, OnInit {
  constructor(private _changeDetectionRef: ChangeDetectorRef,
              private fonticon: TNSFontIconService,
              private sideDrawerService: SideDrawerService) {
    initializeOnAngular();
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.sideDrawerService.sideDrawer = this.drawer;

    this._changeDetectionRef.detectChanges();
  }

  ngOnInit() {
  }


}
