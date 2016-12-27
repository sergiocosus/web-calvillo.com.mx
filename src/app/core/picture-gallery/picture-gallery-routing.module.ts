import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PictureGalleryComponent} from './picture-gallery.component';



export const pictureGalleryRoutes: Routes = [
  {
    path: '',
    component: PictureGalleryComponent,
  },
  {
    path: ':category_id',
    component: PictureGalleryComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(pictureGalleryRoutes)],
  exports: [RouterModule]
})
export class PictureGalleryRoutingModule {}

