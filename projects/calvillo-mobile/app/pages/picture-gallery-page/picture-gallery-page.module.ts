import { NgModule } from '@angular/core';
import { PictureGalleryPageComponent } from './picture-gallery-page/picture-gallery-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { PictureGalleryPageRoutes } from '~/pages/picture-gallery-page/picture-gallery-page.routes';
import { SharedModule } from '~/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>PictureGalleryPageRoutes),
  ],
  declarations: [PictureGalleryPageComponent]
})
export class PictureGalleryPageModule {
}
