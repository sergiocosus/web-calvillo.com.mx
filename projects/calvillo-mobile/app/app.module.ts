import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {
  ApiHttp,
  ApiModule,
  CategoryService,
  LocalStorageService
} from '@calvillo/api';
import { environment } from "./environment";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

require("nativescript-localstorage");

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule r} from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    ApiModule.forRoot({
      apiClientID: environment.apiClientID,
      apiClientSecret: environment.apiClientSecret,
      apiUrl: environment.apiUrl,
      apiAuthUrl: environment.apiAuthUrl,
    }),
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  providers: [
    CategoryService,
    ApiHttp,
    LocalStorageService,
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
