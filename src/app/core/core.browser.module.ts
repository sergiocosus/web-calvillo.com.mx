import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {LandingModule} from './landing/landing.module.browser';
import {GalleryModule} from './gallery/gallery.browser.module';
import {AuthModule} from '../auth/auth.module.browser';
import { NavPagesComponent } from './nav-pages/nav-pages.component';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    LandingModule,
    GalleryModule,
    AuthModule,
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
    NavPagesComponent,
  ]
})
export class CoreModule { }
