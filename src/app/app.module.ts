import {NgModule, PLATFORM_ID} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CategoryModule} from './category/category.module';
import {CoreModule} from './core/core.module';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {environment} from '../environments/environment';
import {AdsenseModule} from 'ng2-adsense';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {FacebookModule} from 'ngx-facebook';
import {SearchModule} from './search/search.module';
import {AuthModule} from './auth/auth.module';
import {PictureModule} from './picture/picture.module';






@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({appId: 'web-calvillo-com-mx'}),
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SharedModule.forRoot(),
    SearchModule.forRoot(),
    FacebookModule.forRoot(),
    CategoryModule.forRoot(),
    AuthModule.forRoot(),
    PictureModule.forRoot(),
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
