import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { ContactPageRoutes } from '~/pages/contact-page/contact-page.routes';
import { SharedModule } from '~/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>ContactPageRoutes),
  ],
  declarations: [ContactPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ContactPageModule { }
