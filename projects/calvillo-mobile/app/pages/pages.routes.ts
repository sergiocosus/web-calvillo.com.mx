import { Routes } from '@angular/router';
// app

export const PagesRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/picture-gallery-page/picture-gallery-page.module#PictureGalleryPageModule'
  },
  {
    path: '',
    loadChildren: './pages/gallery/gallery-page.module#GalleryPageModule'
  },
];
