import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { SharedModule } from '../shared/shared.module';
import { MapsModule } from '../maps/maps.module';
import { DirectoryDialogComponent } from './components/directory-dialog/directory-dialog.component';
import { DirectoryGalleryListComponent } from './components/directory-gallery-list/directory-gallery-list.component';
import { AuthModule } from '../auth/auth.module';
import { DirectoryService } from '@calvillo/api';
import { DirectoryDetailComponent } from './components/directory-detail/directory-detail.component';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';

@NgModule({
  imports: [
    SharedModule,
    MapsModule,
    AuthModule,
    ImageToDataUrlModule,
  ],
  declarations: [
    DirectoryComponent,
    DirectoryDialogComponent,
    DirectoryGalleryListComponent,
    DirectoryDetailComponent,
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
    DirectoryGalleryListComponent,
    DirectoryDetailComponent,
  ]
})
export class DirectoryModule {
}
