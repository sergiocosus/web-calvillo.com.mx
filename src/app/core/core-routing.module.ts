import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core.component';
import {landingRoutes} from './landing/landing-routing.module';
import {galleryRoutes} from './gallery/gallery-routing.module';



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
        children: galleryRoutes,
      },
      {
        path: 'mapa',
        loadChildren: 'app/core/map/map.module#MapModule',
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

