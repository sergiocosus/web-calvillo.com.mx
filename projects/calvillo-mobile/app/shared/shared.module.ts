import { NgModule } from '@angular/core';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import {
  NativeScriptFormsModule,
  NativeScriptRouterModule
} from 'nativescript-angular';
import { PagerModule } from 'nativescript-pager/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    TNSFontIconModule,
    NativeScriptUIListViewModule,
  ],
  declarations: [ActionBarComponent, NavPagesComponent],
  exports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptUIListViewModule,
    ActionBarComponent,
    TNSFontIconModule,
    NavPagesComponent,
    PagerModule
  ],
})
export class SharedModule {
}
