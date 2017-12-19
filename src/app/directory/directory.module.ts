import { NgModule } from '@angular/core';
import {DirectoryComponent} from './directory.component';
import {SharedModule} from '../shared/shared.module';
import {MapsModule} from '../maps/maps.module';
import {DirectoryDialogComponent} from './components/directory-dialog/directory-dialog.component';
import {DirectoryGalleryListComponent} from './components/directory-gallery-list/directory-gallery-list.component';
import {AuthModule} from '../auth/auth.module';
import {ImageUploadModule} from 'ng2-imageupload';
import {DirectoryService} from './services/directory.service';

@NgModule({
  imports: [
    SharedModule,
    MapsModule,
    AuthModule,
    ImageUploadModule,
  ],
  declarations: [
    DirectoryComponent,
    DirectoryDialogComponent,
    DirectoryGalleryListComponent,
  ],
  providers: [
    DirectoryService,
  ],
  entryComponents: [
    DirectoryDialogComponent,
  ],
  exports: [
    DirectoryComponent,
    DirectoryDialogComponent,
    DirectoryGalleryListComponent
  ]
})
export class DirectoryModule { }