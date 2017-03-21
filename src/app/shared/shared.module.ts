import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiHttpServiceProvider } from './api-http.service';
import {UniversalModule} from 'angular2-universal';
import {RouterModule} from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import {ResolutionService} from './services/resolution.service';
import {ModalModule} from 'ng2-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {LocalStorageService} from './services/local-storage.service';


@NgModule({
  imports: [
    CommonModule,
    UniversalModule,
    RouterModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    VoidComponent,
  ],
  providers: [
    apiHttpServiceProvider,
    ResolutionService,
    LocalStorageService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UniversalModule,
    RouterModule,
    ModalModule,
    VoidComponent,
  ]
})
export class SharedModule { }
