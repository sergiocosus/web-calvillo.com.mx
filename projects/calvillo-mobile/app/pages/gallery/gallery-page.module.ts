import { NgModule } from '@angular/core';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { GalleryRoutes } from '~/pages/gallery/gallery.routes';
import { SharedModule } from '~/shared/shared.module';
import { GalleryModule } from '~/modules/gallery/gallery.module';
import { CategoryModule } from '~/modules/category/category.module';
import { PictureModule } from '~/modules/picture/picture.module';
import { DirectoryModule } from '~/modules/directory/directory.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>GalleryRoutes),
    GalleryModule,
    CategoryModule,
    PictureModule,
    DirectoryModule,
  ],
  declarations: [GalleryPageComponent]
})
export class GalleryPageModule {
}
