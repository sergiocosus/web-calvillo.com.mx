import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import {SharedModule} from '../../shared/shared.module';
import {LandingRoutingModule} from './landing-routing.module';
import {CategoryModule} from '../../category/category.module.browser';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {PictureModule} from '../../picture/picture.module';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule,
    CategoryModule,
    ShareButtonsModule,
    PictureModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
