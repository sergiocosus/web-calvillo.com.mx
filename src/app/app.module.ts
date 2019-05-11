import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AdsenseModule } from 'ng2-adsense';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
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
import { CalendarModule, DateAdapter, } from 'angular-calendar';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'; // to register french

library.add(fab);
library.add(fas);

registerLocaleData(localeEs);


const options: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'pinterest'],
  theme: 'landing',
  gaTracking: true,
};


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'web-calvillo-com-mx'}),
    BrowserTransferStateModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SharedModule.forRoot(),
    SearchModule,
    FacebookModule.forRoot(),
    AuthModule.forRoot(),
    PictureModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
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
    }),
    BrowserAnimationsModule,

    SimpleNotificationsModule.forRoot(),
    CoreModule,

    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'es'},
  ]
})
export class AppModule {

}
