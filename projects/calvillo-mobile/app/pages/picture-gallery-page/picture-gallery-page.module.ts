import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PictureGalleryPageComponent } from './picture-gallery-page/picture-gallery-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { PictureGalleryPageRoutes } from '~/pages/picture-gallery-page/picture-gallery-page.routes';
import { SharedModule } from '~/shared/shared.module';
import { PictureMapPageComponent } from './picture-map-page/picture-map-page.component';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>PictureGalleryPageRoutes),
  ],
  declarations: [PictureGalleryPageComponent, PictureMapPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PictureGalleryPageModule {
}
