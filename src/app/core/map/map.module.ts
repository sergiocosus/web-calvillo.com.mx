import { NgModule } from '@angular/core';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import {SharedModule} from '../../shared/shared.module';
import {MapsModule} from '../../maps/maps.module';
import {DirectoryModule} from '../../directory/directory.module.browser';

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule,
    MapsModule,
    DirectoryModule,
  ],
  declarations: [MapComponent]
})
export class MapModule { }
