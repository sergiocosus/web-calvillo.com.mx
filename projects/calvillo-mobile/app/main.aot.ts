// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from 'nativescript-angular/platform-static';
// "./app.module.ngfactory" is a dynamically generated module when compiled with AoT.
import { AppModuleNgFactory } from './app.module.ngfactory';

import { on as applicationOn, launchEvent, ApplicationEventData } from 'application';
let imageCache = require('nativescript-web-image-cache');

applicationOn(launchEvent, (args: ApplicationEventData) => {
  if (args.android) {
    imageCache.setCacheLimit(5);
  } else if (args.ios !== undefined) {
  }
});

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
