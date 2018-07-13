import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coreRoutes } from './core/core-routing.module';


export const appRoutes: Routes = [
  {
    path: '',
    children: coreRoutes,
    //loadChildren: 'app/core/core.module#CoreModule',
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

