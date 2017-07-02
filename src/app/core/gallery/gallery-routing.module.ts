import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryComponent} from './gallery.component';
import {PictureGalleryComponent} from './picture-gallery/picture-gallery.component';
import {VoidComponent} from '../../shared/components/void/void.component';



export const galleryRoutes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      {
        path: ':category_link',
        component: VoidComponent,
      }
    ]
  },
  {
    path: ':category_link/foto',
    component: PictureGalleryComponent,
    children: [
      {
        path: ':picture_link',
        component: VoidComponent,
      }
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}

