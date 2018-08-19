import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DirectoryMapComponent } from './components/directory-map/directory-map.component';
import { SharedModule } from '~/shared/shared.module';
import { DirectoryModule } from '~/modules/directory/directory.module';

@NgModule({
  imports: [
    SharedModule,
    DirectoryModule,
  ],
  declarations: [DirectoryMapComponent],
  exports: [DirectoryMapComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MapModule { }
