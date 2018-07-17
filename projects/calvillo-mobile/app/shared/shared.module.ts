import { NgModule } from '@angular/core';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import { NativeScriptRouterModule } from 'nativescript-angular';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        TNSFontIconModule
    ],
    declarations: [ActionBarComponent, NavPagesComponent],
    exports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        ActionBarComponent,
        TNSFontIconModule,
        NavPagesComponent
    ],
})
export class SharedModule {
}
