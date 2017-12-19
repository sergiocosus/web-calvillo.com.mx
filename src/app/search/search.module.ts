import {ModuleWithProviders, NgModule} from '@angular/core';
import {SearchService} from './services/search.service';
import { SearchComponent } from './components/search/search.component';
import {SharedModule} from '../shared/shared.module';
import {MatAutocompleteModule} from '@angular/material';
import {CategoryModule} from '../category/category.module';

@NgModule({
  imports: [
    SharedModule,
    MatAutocompleteModule,
    CategoryModule,
  ],
  declarations: [
    SearchComponent
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [
        SearchService,
      ],
    };
  }
}
