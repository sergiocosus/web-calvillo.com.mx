import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import {
  NativeScriptFormsModule,
  NativeScriptRouterModule
} from 'nativescript-angular';
import { PagerModule } from 'nativescript-pager/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { ActivityStatusIndicatorComponent } from './components/activity-status-indicator/activity-status-indicator.component';
//import { DropDownModule } from 'nativescript-drop-down/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    TNSFontIconModule,
    NativeScriptUIListViewModule,
  ],
  declarations: [ActionBarComponent, NavPagesComponent, ActivityStatusIndicatorComponent],
  exports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptUIListViewModule,
    ActionBarComponent,
    ActivityStatusIndicatorComponent,
    TNSFontIconModule,
    NavPagesComponent,
    PagerModule,
    //DropDownModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule {
}
