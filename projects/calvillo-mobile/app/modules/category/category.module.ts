import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { CategoryComponent } from '~/modules/category/components/category/category.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CategoryComponent],
  exports: [
    CategoryComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CategoryModule { }
