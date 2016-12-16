import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PictureGalleryComponent} from './picture-gallery.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: PictureGalleryComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PictureGalleryRoutingModule {}

