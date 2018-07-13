import { InjectionToken } from '@angular/core';

export const CALVILLO_COM_MX_API_CONFIG = new InjectionToken<CalvilloComMxApiConfig>('CALVILLO_COM_MX_API_CONF');

export interface CalvilloComMxApiConfig {
  apiUrl?: string;
  apiAuthUrl?: string;
  apiClientID?: string;
  apiClientSecret?: string;
}
