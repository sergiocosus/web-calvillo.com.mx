import { NgModule } from '@angular/core';
import {DirectoryComponent} from './directory.component';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapsModule} from '../maps/maps.module';

@NgModule({
  imports: [
    SharedModule,
    MapsModule,
  ],
  declarations: [
    DirectoryComponent,
  ],
  exports: [
    DirectoryComponent,
  ]
})
export class DirectoryModule { }
