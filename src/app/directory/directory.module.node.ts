import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DirectoryComponent} from './directory.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    //DirectoryComponent,
  ],
  exports: [
    //DirectoryComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DirectoryModule { }
