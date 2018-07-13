import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from '@calvillo/api/services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { UserModule } from '../user/user.module';
import { IfLoggedDirective } from './directives/if-logged.directive';

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
  entryComponents: [
    LoginModalComponent,
  ],
  exports: [
    LoginModalComponent,
    IfLoggedDirective,
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    };
  }
}
