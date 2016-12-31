import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {LandingModule} from './landing/landing.module';
import {GalleryModule} from './gallery/gallery.node.module';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    LandingModule,
    GalleryModule
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
  ]
})
export class CoreModule { }
