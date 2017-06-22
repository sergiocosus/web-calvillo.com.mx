import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AuthService} from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {IfLoggedDirective} from './directives/if-logged.directive';

@NgModule({
  imports: [
    SharedModule,
    UserModule,
  ],
  declarations: [
    //LoginComponent,
    //LoginModalComponent,
    //IfLoggedDirective,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    //LoginModalComponent,
    //IfLoggedDirective,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthModule { }
