import { NgModule } from '@angular/core';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { GalleryRoutes } from '~/pages/gallery/gallery.routes';
import { SharedModule } from '~/shared/shared.module';
import { GalleryModule } from '~/modules/gallery/gallery.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>GalleryRoutes),
    GalleryModule,
  ],
  declarations: [GalleryPageComponent]
})
export class GalleryPageModule {
}
