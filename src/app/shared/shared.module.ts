import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {UniversalModule} from 'angular2-universal';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    UniversalModule,
    RouterModule,
  ],
  declarations: [],
  providers: [
    apiHttpServiceProvider,
  ],
  exports: [
    CommonModule,
    UniversalModule,
    RouterModule,
  ]
})
export class SharedModule { }
