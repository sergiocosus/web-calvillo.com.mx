import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}

