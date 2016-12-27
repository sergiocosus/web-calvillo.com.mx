import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreRoutingModule, coreRoutes} from './core/core-routing.module';



export const appRoutes: Routes = [
  {
    path: '',
    children: coreRoutes,
    //loadChildren: 'app/core/core.module#CoreModule',
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

