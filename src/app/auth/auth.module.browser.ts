import { NgModule } from '@angular/core';
import {AuthService} from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import {SharedModule} from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {UserModule} from '../user/user.module';
import {IfLoggedDirective} from './directives/if-logged.directive';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    AgmCoreModule,
    UserModule,
  ],
  declarations: [
    LoginComponent,
    LoginModalComponent,
    IfLoggedDirective,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    LoginModalComponent,
    IfLoggedDirective,
  ]
})
export class AuthModule { }
