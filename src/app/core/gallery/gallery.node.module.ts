import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PictureModule} from '../../picture/picture.module';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import {CategoryModule} from '../../category/category.module.node';
import {DirectoryModule} from '../../directory/directory.module.node';
import {AuthModule} from '../../auth/auth.module.node';

@NgModule({
  imports: [
    SharedModule,
    GalleryRoutingModule,
    PictureModule,
    CategoryModule,
    DirectoryModule,
    AuthModule,
  ],
  declarations: [
    GalleryComponent,
    PictureGalleryComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GalleryModule { }
