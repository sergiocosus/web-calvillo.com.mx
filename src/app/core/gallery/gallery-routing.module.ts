import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryComponent} from './gallery.component';
import {PictureGalleryComponent} from './picture-gallery/picture-gallery.component';



export const galleryRoutes: Routes = [
  {
    path: ':category_id/foto/:picture_id',
    component: PictureGalleryComponent
  },
  {
    path: '',
    component: GalleryComponent,
  },
  {
    path: ':category_id',
    component: GalleryComponent,

  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}

