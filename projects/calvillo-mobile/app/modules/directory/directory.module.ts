import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { DirectoryItemComponent } from './components/directory-item/directory-item.component';
import { DirectoryDetailComponent } from '~/modules/directory/components/directory-detail/directory-detail.component';
import { DirectoryDataComponent } from './components/directory-data/directory-data.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DirectoryItemComponent,
    DirectoryDetailComponent,
    DirectoryDataComponent,
  ],
  exports: [
    DirectoryItemComponent,
    DirectoryDetailComponent,
    DirectoryDataComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DirectoryModule { }
