import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import {SharedModule} from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import {UserModule} from '../user/user.module';
import {IfLoggedDirective} from './directives/if-logged.directive';

@NgModule({
  imports: [
    SharedModule,
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
  entryComponents: [
    LoginModalComponent,
  ],
  exports: [
    LoginModalComponent,
    IfLoggedDirective,
  ],
})
export class AuthModule { }
