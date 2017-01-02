import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import {SharedModule} from '../../shared/shared.module';
import {LandingRoutingModule} from './landing-routing.module';
import {CategoryModule} from '../../category/category.module';
import {ShareButtonsModule} from 'ng2-sharebuttons';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule,
    CategoryModule,
    ShareButtonsModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
