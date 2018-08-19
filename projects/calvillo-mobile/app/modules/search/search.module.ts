import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '~/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SearchModule { }
