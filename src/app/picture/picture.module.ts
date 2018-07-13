import { ModuleWithProviders, NgModule } from '@angular/core';
import { PictureThumbnailComponent } from './components/picture-thumbnail/picture-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { UploadPictureModalComponent } from './components/upload-picture-modal/upload-picture-modal.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule
} from '@angular/material';
import { PictureService } from '@calvillo/api';
import { ImageUploadModule } from 'ng2-imageupload';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MapsModule } from '../maps/maps.module';
import { PictureFormComponent } from './components/picture-form/picture-form.component';
import { PictureGalleryListComponent } from './components/picture-gallery-list/picture-gallery-list.component';
import { AuthModule } from '../auth/auth.module';
import { SocialPostDialogComponent } from './components/social-post-dialog/social-post-dialog.component';
import { PictureFormService } from './services/picture-form.service';

@NgModule({
  imports: [
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ImageUploadModule,
    SimpleNotificationsModule,
    MapsModule,
    AuthModule,
  ],
  declarations: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
    PictureFormComponent,
    PictureGalleryListComponent,
    SocialPostDialogComponent,
  ],
  entryComponents: [
    UploadPictureModalComponent,
    SocialPostDialogComponent,
  ],
  exports: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
    PictureFormComponent,
    PictureGalleryListComponent,
    SocialPostDialogComponent,
  ]
})
export class PictureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PictureModule,
      providers: [
        PictureService,
        PictureFormService,
      ],
    };
  }
}
