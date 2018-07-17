import { Routes } from '@angular/router';
// app

export const PagesRoutes: Routes = [
    {
        path: '',
        loadChildren: './pages/gallery/gallery-page.module#GalleryPageModule'
    }
];
