import { NgModule } from '@angular/core';
import { PictureThumbnailComponent } from './components/picture-thumbnail/picture-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { UploadPictureModalComponent } from './components/upload-picture-modal/upload-picture-modal.component';
import {MaterialModule, MdCardModule, MdInputModule} from '@angular/material';
import {PictureService} from './services/picture.service';
import {ImageUploadModule} from 'ng2-imageupload';
import {DateTimePickerModule} from 'ng2-date-time-picker';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {MapsModule} from '../maps/maps.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    MdCardModule,
    MdInputModule,
    ImageUploadModule,
    DateTimePickerModule,
    SimpleNotificationsModule,
    MapsModule,
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
