import { Routes } from '@angular/router';
import { PictureGalleryPageComponent } from '~/pages/picture-gallery-page/picture-gallery-page/picture-gallery-page.component';
// app

export const PictureGalleryPageRoutes: Routes = [
  {
    path: 'galeria/:categoryLink/foto/:pictureLink',
    component: PictureGalleryPageComponent,
    pathMatch: 'full'
  }
];
