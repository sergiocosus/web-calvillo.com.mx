import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PictureModule} from '../../picture/picture.module';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';

@NgModule({
  imports: [
    SharedModule,
    GalleryRoutingModule,
    PictureModule,
  ],
  declarations: [
    GalleryComponent,
    PictureGalleryComponent
  ],
})
export class GalleryModule { }
