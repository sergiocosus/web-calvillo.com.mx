import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {RouterModule} from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import {ResolutionService} from './services/resolution.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {LocalStorageService} from './services/local-storage.service';
import {EXIFService} from './services/exif.service';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotifyService} from './services/notify.service';
import {HttpModule} from '@angular/http';
import {MdButtonModule, MdDialogModule, MdInputModule} from '@angular/material';
import { LogoComponent } from './components/logo/logo.component';
import {SidebarModule} from 'ng-sidebar';
import {NavbarService} from './services/navbar.service';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {MyHammerConfig} from './my-hammer-config';
import {GoogleAnalyticsService} from './services/google-analytics.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    SidebarModule,
  ],
  declarations: [
    VoidComponent,
    LogoComponent,
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SidebarModule,
    VoidComponent,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    LogoComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NavbarService,
        apiHttpServiceProvider,
        ResolutionService,
        LocalStorageService,
        EXIFService,
        NotifyService,
        GoogleAnalyticsService,
        {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: MyHammerConfig ,
        },
      ],
    };
  }
}
