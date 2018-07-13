import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule,
  ],
  declarations: [AccountComponent]
})
export class AccountModule {
}
