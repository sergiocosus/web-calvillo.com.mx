import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '~/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchModule { }
