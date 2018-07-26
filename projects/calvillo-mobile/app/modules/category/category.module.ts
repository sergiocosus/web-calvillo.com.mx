import { NgModule } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { CategoryComponent } from '~/modules/category/components/category/category.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CategoryComponent],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
