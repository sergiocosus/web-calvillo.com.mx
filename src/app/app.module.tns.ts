import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader, PLATFORM_ID} from '@angular/core';
import { Http } from '@angular/http';
// nativescript
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// vendor dependencies
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';
import {CategoryService} from './category/services/category.service';
import {PlatformService} from "./shared/services/platform.service";
import {NativeScriptUISideDrawerModule} from "nativescript-telerik-ui/sidedrawer/angular";
import {NativeScriptUIListViewModule} from "nativescript-telerik-ui/listview/angular";

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

//export function createTranslateLoader(http: Http) {
//    return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
//}

export function apiPlatformServiceFactory ()  {
    return new PlatformService('mobile');
}


export let apiPlatformServiceProvider =
    {
        provide: PlatformService,
        useFactory: apiPlatformServiceFactory,
    };



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        //TranslateModule.forRoot({
         //   loader: {
        //        provide: TranslateLoader,
        //        useFactory: (createTranslateLoader),
        //        deps: [Http]
        //    }
        //}),
        ...SHARED_MODULES,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        CategoryService,
        apiPlatformServiceProvider,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
