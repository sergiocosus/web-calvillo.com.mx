/**
 * the polyfills must be the first thing imported
 */
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


/**
 * enable prod mode for production environments
 */
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
