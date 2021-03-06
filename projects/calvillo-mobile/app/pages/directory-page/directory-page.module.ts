import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DirectoryPageComponent } from './directory-page/directory-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { SharedModule } from '~/shared/shared.module';
import { DirectoryPageRoutes } from '~/pages/directory-page/directory-page.routes';
import { DirectoryModule } from '~/modules/directory/directory.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>DirectoryPageRoutes),
    DirectoryModule,
  ],
  declarations: [DirectoryPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DirectoryPageModule { }
