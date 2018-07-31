import { Routes } from '@angular/router';
// app

export const PagesRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/home-page/home-page.module#HomePageModule'
  },
  {
    path: '',
    loadChildren: './pages/picture-gallery-page/picture-gallery-page.module#PictureGalleryPageModule'
  },
  {
    path: '',
    loadChildren: './pages/gallery/gallery-page.module#GalleryPageModule'
  },
  {
    path: '',
    loadChildren: './pages/directory-page/directory-page.module#DirectoryPageModule'
  },
];
