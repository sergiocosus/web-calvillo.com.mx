import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';


export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}

