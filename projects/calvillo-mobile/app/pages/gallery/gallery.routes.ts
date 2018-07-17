import { Routes } from '@angular/router';
import { GalleryPageComponent } from '~/pages/gallery/gallery-page/gallery-page.component';
// app

export const GalleryRoutes: Routes = [
    {
        path: 'galeria/:categoryLink',
        component: GalleryPageComponent
    }
];
