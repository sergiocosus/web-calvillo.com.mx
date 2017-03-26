import { NgModule } from '@angular/core';
import { PictureThumbnailComponent } from './components/picture-thumbnail/picture-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { UploadPictureModalComponent } from './components/upload-picture-modal/upload-picture-modal.component';
import {MaterialModule} from '@angular/material';
import {PictureService} from './services/picture.service';
import {ImageUploadModule} from 'ng2-imageupload';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    ImageUploadModule,
  ],
  declarations: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
  ],
  providers: [
    PictureService,
  ],
  exports: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
  ]
})
export class PictureModule { }
