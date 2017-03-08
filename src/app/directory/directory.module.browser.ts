import { NgModule } from '@angular/core';
import {DirectoryComponent} from './directory.component';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from 'angular2-google-maps/core';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    DirectoryComponent,
  ],
  exports: [
    DirectoryComponent,
  ]
})
export class DirectoryModule { }
