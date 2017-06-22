import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './index';
import {ServerModule} from '@angular/platform-server';
import {AppModule} from './app.module';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [
    //AppComponent
  ],
  imports: [
    ServerModule,
    AppModule
  ],
 // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppServerModule {

}
