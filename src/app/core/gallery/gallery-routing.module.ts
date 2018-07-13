import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';


export const galleryRoutes: Routes = [
  {
    path: ':category_link',
    component: GalleryComponent,
  },
  {
    path: ':category_link/foto',
    component: PictureGalleryComponent,
  },
  {
    path: ':category_link/foto/:picture_link',
    component: PictureGalleryComponent,
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {
}

