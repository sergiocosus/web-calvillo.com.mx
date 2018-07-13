import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './category/category.module';
import { environment } from '../environments/environment';
import { AdsenseModule } from 'ng2-adsense';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { FacebookModule } from 'ngx-facebook';
import { SearchModule } from './search/search.module';


import { AuthModule } from './auth/auth.module';
import { PictureModule } from './picture/picture.module';
import { CoreModule } from './core/core.module';
import { ShareButtonsOptions } from '@ngx-share/core';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ApiModule } from '@calvillo/api';

library.add(fab);
library.add(fas);
const options: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'google', 'pinterest'],
  theme: 'landing',
  gaTracking: true,
};


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'web-calvillo-com-mx'}),
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SharedModule.forRoot(),
    SearchModule,
    FacebookModule.forRoot(),
    CategoryModule.forRoot(),
    AuthModule.forRoot(),
    PictureModule.forRoot(),
    ShareButtonsModule.forRoot({options: options}),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    AdsenseModule.forRoot({
      adClient: environment.adSenseAdClient,
      adSlot: environment.adSenseAdSlot,
    }),
    ApiModule.forRoot({
      apiUrl: environment.apiUrl,
      apiClientID: environment.apiClientID,
      apiClientSecret: environment.apiClientSecret,
      apiAuthUrl: environment.apiAuthUrl,
    }),
    BrowserAnimationsModule,

    SimpleNotificationsModule.forRoot(),
    CoreModule,

    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {

}
