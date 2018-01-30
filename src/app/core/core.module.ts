import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {LandingModule} from './landing/landing.module';
import {GalleryModule} from './gallery/gallery.module';
import {AuthModule} from '../auth/auth.module';
import { NavPagesComponent } from './nav-pages/nav-pages.component';
import {SearchModule} from '../search/search.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {PictureModule} from '../picture/picture.module';
import {DirectoryModule} from '../directory/directory.module';
import {CategoryModule} from '../category/category.module';
import {DirectoryRouteModule} from './directory/directory-route.module';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    LandingModule,
    GalleryModule,
    AuthModule,
    SearchModule,
    PictureModule,
    DirectoryModule,
    DirectoryRouteModule,
    CategoryModule,
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
    NavPagesComponent,
    NotFoundComponent,
  ]
})
export class CoreModule { }
