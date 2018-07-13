import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PictureModule } from '../../picture/picture.module';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import { CategoryModule } from '../../category/category.module';
import { DirectoryModule } from '../../directory/directory.module';
import { AgmCoreModule } from '@agm/core';
import { AdsenseModule } from 'ng2-adsense';
import { AuthModule } from '../../auth/auth.module';
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { FacebookModule } from "ngx-facebook";

@NgModule({
  imports: [
    MatTooltipModule,
    MatButtonModule,
    SharedModule,
    GalleryRoutingModule,
    PictureModule,
    CategoryModule,
    DirectoryModule,
    AgmCoreModule,
    AdsenseModule,
    AuthModule,
    FacebookModule,
  ],
  declarations: [
    GalleryComponent,
    PictureGalleryComponent
  ],
})
export class GalleryModule {
}
