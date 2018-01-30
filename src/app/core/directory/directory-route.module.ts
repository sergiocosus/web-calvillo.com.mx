import { NgModule } from '@angular/core';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryRouteComponent } from './directory-route.component';
import {SharedModule} from '../../shared/shared.module';
import {DirectoryModule} from '../../directory/directory.module';

@NgModule({
  imports: [
    SharedModule,
    DirectoryModule,
    DirectoryRoutingModule,
  ],
  declarations: [DirectoryRouteComponent]
})
export class DirectoryRouteModule { }
