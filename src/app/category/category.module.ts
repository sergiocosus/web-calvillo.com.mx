import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CategoryService} from './category.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [

  ],
  providers: [
    CategoryService,
  ]
})
export class CategoryModule { }
