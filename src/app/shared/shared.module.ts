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
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {DateTimePickerModule} from 'ng-pick-datetime';
import { LogoComponent } from './components/logo/logo.component';
import {SidebarModule} from 'ng-sidebar';
import {NavbarService} from './services/navbar.service';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {MyHammerConfig} from './my-hammer-config';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import {ScriptService} from './services/script.service';
import {AdsenseModule} from 'ng2-adsense';
import { ImageComponent } from './components/image/image.component';
import {PlatformService} from './services/platform.service';
import {HttpClientModule} from '@angular/common/http';
import { AdThumbComponent } from './components/ad-thumb/ad-thumb.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import {ShareButtonModule} from "@ngx-share/button";
import {ShareButtonsModule} from "@ngx-share/buttons";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    SidebarModule,
    AdsenseModule,
    ShareButtonsModule,
  ],
  declarations: [
    VoidComponent,
    LogoComponent,
    ImageComponent,
    AdThumbComponent,
    BackButtonComponent,
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SidebarModule,
    AdsenseModule,
    VoidComponent,
    ImageComponent,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    DateTimePickerModule,
    ShareButtonsModule,
    LogoComponent,
    AdThumbComponent,
    BackButtonComponent,
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
        ScriptService,
        GoogleAnalyticsService,
        PlatformService,
        {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: MyHammerConfig ,
        },
      ],
    };
  }
}
