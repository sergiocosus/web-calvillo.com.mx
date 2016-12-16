import { NgModule } from '@angular/core';
import { PictureGalleryComponent } from './picture-gallery.component';
import {PictureGalleryRoutingModule} from './picture-gallery-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PictureGalleryRoutingModule,
  ],
  declarations: [
    PictureGalleryComponent
  ],
})
export class PictureGalleryModule { }
