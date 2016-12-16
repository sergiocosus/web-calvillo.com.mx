import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/core/landing/landing.module#LandingModule',
        pathMatch: 'full'
      },
      {
        path: 'galeria',
        loadChildren: 'app/core/picture-gallery/picture-gallery.module#PictureGalleryModule',
      }
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

