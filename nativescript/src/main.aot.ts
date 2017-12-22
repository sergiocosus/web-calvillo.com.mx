// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from 'nativescript-angular/platform-static';

import { AppModuleNgFactory } from './app/app.module.ngfactory';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/throw';

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
