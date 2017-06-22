import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CategoryService} from './services/category.service';
import { CategoryThumbnailComponent } from './components/category-thumbnail/category-thumbnail.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
  ],
  declarations: [
   // CategoryThumbnailComponent,
    //AddCategoryModalComponent,
  ],
  providers: [
    CategoryService,
  ],
  exports: [
    //CategoryThumbnailComponent,
    //AddCategoryModalComponent,
  ]
})
export class CategoryModule { }
