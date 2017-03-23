/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';

import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CategoryModule} from './category/category.module.browser';
import {CoreModule} from './core/core.browser.module';
import {ShareButtonsModule} from 'ng2-sharebuttons';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {environment} from '../environments/environment';
import {ModalModule} from 'ng2-bootstrap';
import {AdsenseModule} from 'ng2-adsense';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [ AppComponent ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    UniversalModule,
    FormsModule,

    AppRoutingModule,
    SharedModule,
    CategoryModule,
    CoreModule,
    ShareButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    ModalModule.forRoot(),
    AdsenseModule.forRoot({
      adClient: environment.adSenseAdClient,
      adSlot: environment.adSenseAdSlot
    }),
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {

}
