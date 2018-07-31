import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
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
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { SharedModule } from '~/shared/shared.module';
import { SideDrawerService } from '~/shared/services/side-drawer.service';


import { registerElement } from 'nativescript-angular/element-registry';
registerElement('ImageCacheIt', () => require('nativescript-image-cache-it').ImageCacheIt);

// Uncomment and add to NgModule imports if you need to use two-way binding
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
      'mdi': 'material-design-icons.css'
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
    ItemsComponent,
    ItemDetailComponent
  ],
  providers: [
    CategoryService,
    PictureService,
    DirectoryService,
    SearchService,
    ApiHttp,
    LocalStorageService,
    SideDrawerService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
}
