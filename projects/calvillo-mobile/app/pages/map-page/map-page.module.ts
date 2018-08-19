import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MapPageComponent } from './map-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { MapPageRoutes } from '~/pages/map-page/map-page.routes';
import { SharedModule } from '~/shared/shared.module';
import { MapModule } from '~/modules/map/map.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>MapPageRoutes),
    MapModule,
  ],
  declarations: [MapPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MapPageModule { }
