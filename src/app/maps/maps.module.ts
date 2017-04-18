import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFromMapModalComponent } from './components/select-from-map-modal/select-from-map-modal.component';
import { PlaceOnMapModalComponent } from './components/place-on-map-modal/place-on-map-modal.component';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from 'angular2-google-maps/core';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    SelectFromMapModalComponent,
    PlaceOnMapModalComponent,
  ],
  exports: [
    SelectFromMapModalComponent,
    PlaceOnMapModalComponent,
  ]
})
export class MapsModule { }
