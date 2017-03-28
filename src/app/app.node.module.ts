/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CategoryModule} from './category/category.module.node';
import {CoreModule} from './core/core.node.module';
import {__platform_browser_private__} from '@angular/platform-browser';
import {ShareButtonsModule} from 'ng2-sharebuttons';
import { DirectoryComponent } from './directory/directory.component';
import {ModalModule} from 'ng2-bootstrap';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {environment} from '../environments/environment';

// Hack to work HammerJs with universal
__platform_browser_private__.HammerGesturesPlugin.prototype.supports = function hackySupports(eventName: string): boolean {
  if (!this.isCustomEvent(eventName)) {
    return false;
  }
  return true;
};

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [ AppComponent ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    UniversalModule,
    FormsModule,

    AppRoutingModule,
    SharedModule,
    CategoryModule,
    CoreModule,
    ModalModule.forRoot(),

    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

}
