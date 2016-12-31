import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {UniversalModule} from 'angular2-universal';
import {RouterModule} from '@angular/router';
import { VoidComponent } from './components/void/void.component';


@NgModule({
  imports: [
    CommonModule,
    UniversalModule,
    RouterModule,
  ],
  declarations: [
    VoidComponent
  ],
  providers: [
    apiHttpServiceProvider,
  ],
  exports: [
    CommonModule,
    UniversalModule,
    RouterModule,
    VoidComponent,
  ]
})
export class SharedModule { }
