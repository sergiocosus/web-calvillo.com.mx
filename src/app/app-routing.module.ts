import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/core/core.module#CoreModule',
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

