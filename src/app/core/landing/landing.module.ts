import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import {SharedModule} from '../../shared/shared.module';
import {LandingRoutingModule} from './landing-routing.module';
import {CategoryModule} from '../../category/category.module';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule,
    CategoryModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
