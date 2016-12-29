import { NgModule } from '@angular/core';
import { PictureThumbnailComponent } from './components/picture-thumbnail/picture-thumbnail.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    PictureThumbnailComponent
  ],
  exports: [
    PictureThumbnailComponent
  ]
})
export class PictureModule { }
