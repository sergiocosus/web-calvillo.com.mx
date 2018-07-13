import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { FacebookModule } from 'ngx-facebook';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule,
    FacebookModule.forRoot(),
    AdsenseModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule {
}
