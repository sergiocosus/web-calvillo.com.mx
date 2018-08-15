import { Routes } from '@angular/router';
import { PictureGalleryPageComponent } from '~/pages/picture-gallery-page/picture-gallery-page/picture-gallery-page.component';
import { PictureMapPageComponent } from '~/pages/picture-gallery-page/picture-map-page/picture-map-page.component';
// app

export const PictureGalleryPageRoutes: Routes = [
  {
    path: 'galeria/:categoryLink/foto/:pictureLink',
    component: PictureGalleryPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'galeria/:categoryLink/foto/:pictureLink/mapa',
    component: PictureMapPageComponent,
    pathMatch: 'full'
  }
];
