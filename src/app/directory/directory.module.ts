import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { SharedModule } from '../shared/shared.module';
import { MapsModule } from '../maps/maps.module';
import { DirectoryDialogComponent } from './components/directory-dialog/directory-dialog.component';
import { DirectoryGalleryListComponent } from './components/directory-gallery-list/directory-gallery-list.component';
import { AuthModule } from '../auth/auth.module';
import { DirectoryDetailComponent } from './components/directory-detail/directory-detail.component';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { DirectoryChipListComponent } from './components/directory-chip-list/directory-chip-list.component';
import { MatAutocompleteModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MapsModule,
    AuthModule,
    ImageToDataUrlModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  declarations: [
    DirectoryComponent,
    DirectoryDialogComponent,
    DirectoryGalleryListComponent,
    DirectoryDetailComponent,
    DirectoryChipListComponent,
  ],
  entryComponents: [
    DirectoryDialogComponent,
  ],
  exports: [
    DirectoryComponent,
    DirectoryDialogComponent,
    DirectoryGalleryListComponent,
    DirectoryDetailComponent,
    DirectoryChipListComponent,
  ]
})
export class DirectoryModule {
}
