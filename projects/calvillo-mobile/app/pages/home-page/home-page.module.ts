import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { SharedModule } from '~/shared/shared.module';
import { SearchModule } from '~/modules/search/search.module';
import { HomePageRoutes } from '~/pages/home-page/home-page-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>HomePageRoutes),
    SearchModule,
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
