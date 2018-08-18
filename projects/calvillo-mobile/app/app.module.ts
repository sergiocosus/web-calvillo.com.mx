import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import {
  ApiHttp,
  ApiModule,
  CategoryService, DirectoryService,
  LocalStorageService,
  PictureService, SearchService
} from '@calvillo/api';
import { environment } from './environment';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { SharedModule } from '~/shared/shared.module';
import { SideDrawerService } from '~/shared/services/side-drawer.service';

import {
  TNSFontIconModule, TNSFontIconService,
} from 'nativescript-ngx-fonticon';
import { UtilsService } from '~/shared/services/utils.service';

require( 'nativescript-orientation' );

TNSFontIconService.debug = true;


// import { NativeScriptFormsModule r} from "nativescript-angular/forms";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule.forRoot({
      'fa': 'assets/font-awesome.css',
      'mdi': './assets/material-design-icons.css',
    }),
    ApiModule.forRoot({
      apiClientID: environment.apiClientID,
      apiClientSecret: environment.apiClientSecret,
      apiUrl: environment.apiUrl,
      apiAuthUrl: environment.apiAuthUrl,
    }),
    SharedModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    CategoryService,
    PictureService,
    DirectoryService,
    SearchService,
    ApiHttp,
    LocalStorageService,
    SideDrawerService,
    UtilsService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class AppModule {
}
