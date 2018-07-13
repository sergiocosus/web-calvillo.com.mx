import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import { ResolutionService } from './services/resolution.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EXIFService } from './services/exif.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotifyService } from './services/notify.service';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarService } from './services/navbar.service';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MyHammerConfig } from './my-hammer-config';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { ScriptService } from './services/script.service';
import { AdsenseModule } from 'ng2-adsense';
import { ImageComponent } from './components/image/image.component';
import { PlatformService } from './services/platform.service';
import { HttpClientModule } from '@angular/common/http';
import { AdThumbComponent } from './components/ad-thumb/ad-thumb.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { AgmCoreModule } from '@agm/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppMetaService } from './services/app-meta.service';


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
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
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
    AdsenseModule,
    VoidComponent,
    ImageComponent,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    AgmCoreModule,
    NgxPageScrollModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
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
        ResolutionService,
        EXIFService,
        NotifyService,
        ScriptService,
        GoogleAnalyticsService,
        PlatformService,
        AppMetaService,
        {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: MyHammerConfig,
        },
      ],
    };
  }
}
