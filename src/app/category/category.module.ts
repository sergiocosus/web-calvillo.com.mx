import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CategoryService} from './services/category.service';
import { CategoryThumbnailComponent } from './components/category-thumbnail/category-thumbnail.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CategoryThumbnailComponent,
  ],
  providers: [
    CategoryService,
  ],
  exports: [
    CategoryThumbnailComponent
  ]
})
export class CategoryModule { }
