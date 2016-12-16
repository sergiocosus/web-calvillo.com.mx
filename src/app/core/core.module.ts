import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
  ]
})
export class CoreModule { }
