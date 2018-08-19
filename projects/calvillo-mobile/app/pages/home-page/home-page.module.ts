import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

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
  declarations: [HomePageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomePageModule { }
