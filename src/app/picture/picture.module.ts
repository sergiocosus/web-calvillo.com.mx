import { ModuleWithProviders, NgModule } from '@angular/core';
import { PictureThumbnailComponent } from './components/picture-thumbnail/picture-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { UploadPictureModalComponent } from './components/upload-picture-modal/upload-picture-modal.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatInputModule
} from '@angular/material';
import { PictureService } from '@calvillo/api';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MapsModule } from '../maps/maps.module';
import { PictureFormComponent } from './components/picture-form/picture-form.component';
import { PictureGalleryListComponent } from './components/picture-gallery-list/picture-gallery-list.component';
import { AuthModule } from '../auth/auth.module';
import { SocialPostDialogComponent } from './components/social-post-dialog/social-post-dialog.component';
import { PictureFormService } from './services/picture-form.service';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { PictureChipListComponent } from './components/picture-chip-list/picture-chip-list.component';

@NgModule({
  imports: [
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ImageToDataUrlModule,
    SimpleNotificationsModule,
    MapsModule,
    AuthModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  declarations: [
    PictureThumbnailComponent,
    UploadPictureModalComponent,
    PictureFormComponent,
    PictureGalleryListComponent,
    SocialPostDialogComponent,
    PictureChipListComponent,
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
    PictureChipListComponent,
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
