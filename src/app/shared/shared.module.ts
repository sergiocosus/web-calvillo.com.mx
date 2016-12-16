import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
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
