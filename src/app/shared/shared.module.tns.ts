import {ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { apiHttpServiceProvider } from './api-http.service';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import {LocalStorageService} from './services/local-storage.service';

@NgModule({
  imports: [

  ],
  declarations: [
   // VoidComponent,
   // LogoComponent,
  ],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        apiHttpServiceProvider,
        LocalStorageService,
      ],
    };
  }
}
