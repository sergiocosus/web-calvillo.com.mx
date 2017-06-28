import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PictureModule} from '../../picture/picture.module';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import {CategoryModule} from '../../category/category.module.browser';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {DirectoryModule} from '../../directory/directory.module.browser';
import { AgmCoreModule } from '@agm/core';
import {AdsenseModule} from 'ng2-adsense';
import {AuthModule} from '../../auth/auth.module.browser';
import {MdButtonModule, MdTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    MdTooltipModule,
    MdButtonModule,
    SharedModule,
    GalleryRoutingModule,
    PictureModule,
    CategoryModule,
    DirectoryModule,
    ShareButtonsModule,
    AgmCoreModule,
    AdsenseModule,
    AuthModule,
  ],
  declarations: [
    GalleryComponent,
    PictureGalleryComponent
  ],
})
export class GalleryModule { }
