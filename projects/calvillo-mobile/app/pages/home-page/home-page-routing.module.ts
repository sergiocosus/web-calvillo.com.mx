import { Routes } from '@angular/router';
import { HomePageComponent } from '~/pages/home-page/home-page.component';
// app

export const HomePageRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];
