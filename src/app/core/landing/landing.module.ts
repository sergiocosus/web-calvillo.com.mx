import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { CategoryModule } from '../../category/category.module';
import { PictureModule } from '../../picture/picture.module';
import { AdsenseModule } from 'ng2-adsense';
import { SearchModule } from '../../search/search.module';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule,
    CategoryModule,
    PictureModule,
    AdsenseModule,
    SearchModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule {
}
