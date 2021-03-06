import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CALVILLO_COM_MX_API_CONFIG, CalvilloComMxApiConfig } from './types/api-config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ApiModule {
  static forRoot(config: CalvilloComMxApiConfig): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {provide: CALVILLO_COM_MX_API_CONFIG, useValue: config},
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
      ],
    };
  }
}
