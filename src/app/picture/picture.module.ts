import { NgModule } from '@angular/core';
import { PictureThumbnailComponent } from './components/picture-thumbnail/picture-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { UploadPictureModalComponent } from './components/upload-picture-modal/upload-picture-modal.component';
import {
  MdButtonModule,
  MdCardModule, MdCheckboxModule, MdDialog, MdDialogModule,
  MdInputModule
} from '@angular/material';
import {PictureService} from './services/picture.service';
import {ImageUploadModule} from 'ng2-imageupload';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {MapsModule} from '../maps/maps.module';
import { PictureFormComponent } from './components/picture-form/picture-form.component';
import { PictureGalleryListComponent } from './components/picture-gallery-list/picture-gallery-list.component';
import {AuthModule} from '../auth/auth.module.browser';
import {DateTimePickerModule} from 'ng-pick-datetime';

@NgModule({
  imports: [
    SharedModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    ImageUploadModule,
    DateTimePickerModule,
    SimpleNotificationsModule,
    MapsModule,
    AuthModule,
  ],
  declarations: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
    PictureFormComponent,
    PictureGalleryListComponent,
  ],
  providers: [
    PictureService,
  ],
  entryComponents: [
    UploadPictureModalComponent,
  ],
  exports: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
    PictureFormComponent,
    PictureGalleryListComponent,
  ]
})
export class PictureModule { }
