import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CategoryService} from './services/category.service';
import { CategoryThumbnailComponent } from './components/category-thumbnail/category-thumbnail.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import {MatButtonModule} from '@angular/material';
import {ImageUploadModule} from 'ng2-imageupload';
import { CategoryGalleryListComponent } from './components/category-gallery-list/category-gallery-list.component';
import {AuthModule} from '../auth/auth.module';
import {CategoryFormService} from './services/category-form.service';

@NgModule({
  imports: [
    SharedModule,
    ImageUploadModule,
    AuthModule,
  ],
  declarations: [
    CategoryThumbnailComponent,
    AddCategoryModalComponent,
    CategoryGalleryListComponent,
  ],
  entryComponents: [
    AddCategoryModalComponent,
  ],
  exports: [
    CategoryThumbnailComponent,
    AddCategoryModalComponent,
    CategoryGalleryListComponent,
  ]
})
export class CategoryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CategoryService,
        CategoryFormService,
      ],
    };
  }
}
