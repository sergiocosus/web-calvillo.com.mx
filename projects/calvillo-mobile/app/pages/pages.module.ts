import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular';

import { PagesRoutes } from './pages.routes';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild(<any>PagesRoutes),
  ],
  declarations: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PagesModule { }
