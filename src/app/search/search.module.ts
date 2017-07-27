import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '../../../nativescript/node_modules/@angular/core/src/metadata/ng_module';
import {SearchService} from './services/search.service';
import { SearchComponent } from './components/search/search.component';
import {SharedModule} from '../shared/shared.module';
import {MdAutocompleteModule} from '@angular/material';
import {CategoryModule} from '../category/category.module.browser';

@NgModule({
  imports: [
    SharedModule,
    MdAutocompleteModule,
    CategoryModule,
  ],
  declarations: [SearchComponent],
  exports:[
      SearchComponent,
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
