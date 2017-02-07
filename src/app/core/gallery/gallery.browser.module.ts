import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PictureModule} from '../../picture/picture.module';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import {CategoryModule} from '../../category/category.module';
import {ResponsiveModule} from 'ng2-responsive';
import {ShareButtonsModule} from 'ng2-sharebuttons';

@NgModule({
  imports: [
    SharedModule,
    GalleryRoutingModule,
    PictureModule,
    CategoryModule,
    ResponsiveModule,
    ShareButtonsModule,
  ],
  declarations: [
    GalleryComponent,
    PictureGalleryComponent
  ],
})
export class GalleryModule { }
