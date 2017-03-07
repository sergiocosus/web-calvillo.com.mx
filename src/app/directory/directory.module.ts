import { NgModule } from '@angular/core';
import {DirectoryComponent} from './directory.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    DirectoryComponent,
  ],
  exports: [
    DirectoryComponent,
  ]
})
export class DirectoryModule { }
