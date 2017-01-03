import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {UniversalModule} from 'angular2-universal';
import {RouterModule} from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import {ResolutionService} from './services/resolution.service';


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
    ResolutionService,
  ],
  exports: [
    CommonModule,
    UniversalModule,
    RouterModule,
    VoidComponent,
  ]
})
export class SharedModule { }
