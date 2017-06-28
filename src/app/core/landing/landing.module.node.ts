import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LandingRoutingModule} from './landing-routing.module';
import {CategoryModule} from '../../category/category.module.node';
import {ShareButtonsModule} from 'ngx-sharebuttons';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule,
    CategoryModule,
    ShareButtonsModule,
  ],
 // declarations: [LandingComponent]
})
export class LandingModule { }
