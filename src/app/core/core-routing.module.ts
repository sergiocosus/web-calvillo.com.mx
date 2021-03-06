import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { landingRoutes } from './landing/landing-routing.module';
import { galleryRoutes } from './gallery/gallery-routing.module';
import { routes as notFoundRoutes } from './not-found/not-found-routing.module';
import { directoryRoutes } from "./directory/directory-routing.module";


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
        path: 'cuenta',
        loadChildren: 'src/app/core/account/account.module#AccountModule',
      },
      {
        path: 'galeria',
        children: galleryRoutes,
      },
      {
        path: 'mapa',
        loadChildren: 'src/app/core/map/map.module#MapModule',
      },
      {
        path: 'contacto',
        loadChildren: 'src/app/core/contact/contact.module#ContactModule',
      },
      {
        path: 'directorio',
        children: directoryRoutes,
        //loadChildren: 'app/core/directory/directory-route.module#DirectoryRouteModule',
      },
      {
        path: 'eventos',
        loadChildren: 'src/app/core/events-page/events-page.module#EventsPageModule',
      },
      {
        path: 'no-encontrado',
        children: notFoundRoutes,
        //loadChildren: 'app/core/contact/contact.module#ContactModule',
      }
    ]
  },
  {path: '**', redirectTo: '/no-encontrado'},
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}

