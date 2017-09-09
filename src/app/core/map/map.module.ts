import { NgModule } from '@angular/core';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import {SharedModule} from '../../shared/shared.module';
import {MapsModule} from '../../maps/maps.module';
import {DirectoryModule} from '../../directory/directory.module';
import {MdMenuModule} from '@angular/material';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule,
    MdMenuModule,
    MapsModule,
    DirectoryModule,
    AgmJsMarkerClustererModule,
  ],
  declarations: [MapComponent]
})
export class MapModule { }
