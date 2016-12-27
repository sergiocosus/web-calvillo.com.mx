import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {UniversalModule} from 'angular2-universal';


@NgModule({
  imports: [
    CommonModule,
    UniversalModule,
  ],
  declarations: [],
  providers: [
    apiHttpServiceProvider,
  ],
  exports: [
    CommonModule,
  ]
})
export class SharedModule { }
