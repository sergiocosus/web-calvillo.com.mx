import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CategoryModule} from './category/category.module.browser';
import {CoreModule} from './core/core.browser.module';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {environment} from '../environments/environment';
import {AdsenseModule} from 'ng2-adsense';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({appId: 'web-calvillo-com-mx'}),
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SharedModule.forRoot(),
    CategoryModule,
    CoreModule,
    ShareButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
        apiKey: environment.googleMapsApiKey
    }),
    AdsenseModule.forRoot({
      adClient: environment.adSenseAdClient,
      adSlot: environment.adSenseAdSlot,
    }),
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),

    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {

}
