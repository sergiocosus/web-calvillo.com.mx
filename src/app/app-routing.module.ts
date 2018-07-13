import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/core/core.module#CoreModule',
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

