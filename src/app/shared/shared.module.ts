import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {UniversalModule} from 'angular2-universal';
import {RouterModule} from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import {ResolutionService} from './services/resolution.service';
import {ModalModule} from 'ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    UniversalModule,
    RouterModule,
    ModalModule,
  ],
  declarations: [
    VoidComponent,
  ],
  providers: [
    apiHttpServiceProvider,
    ResolutionService,
  ],
  exports: [
    CommonModule,
    UniversalModule,
    RouterModule,
    ModalModule,
    VoidComponent,
  ]
})
export class SharedModule { }
