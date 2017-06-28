import { NgModule } from '@angular/core';
import { SelectFromMapModalComponent } from './components/select-from-map-modal/select-from-map-modal.component';
import { PlaceOnMapModalComponent } from './components/place-on-map-modal/place-on-map-modal.component';
import {SharedModule} from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    SelectFromMapModalComponent,
    PlaceOnMapModalComponent,
  ],
  entryComponents: [
    SelectFromMapModalComponent,
    PlaceOnMapModalComponent,
  ],
  exports: [
    SelectFromMapModalComponent,
    PlaceOnMapModalComponent,
    AgmCoreModule,
  ]
})
export class MapsModule { }
