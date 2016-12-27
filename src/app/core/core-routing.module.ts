import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core.component';
import {landingRoutes} from './landing/landing-routing.module';



export const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        children: landingRoutes,
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
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

