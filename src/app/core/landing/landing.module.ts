import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import {SharedModule} from '../../shared/shared.module';
import {LandingRoutingModule} from './landing-routing.module';
import {CategoryModule} from '../../category/category.module';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {PictureModule} from '../../picture/picture.module';
import {AdsenseModule} from 'ng2-adsense';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule,
    CategoryModule,
    ShareButtonsModule,
    PictureModule,
    AdsenseModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
