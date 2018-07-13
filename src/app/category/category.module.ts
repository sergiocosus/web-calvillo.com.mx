import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from '@calvillo/api/services/category.service';
import { CategoryThumbnailComponent } from './components/category-thumbnail/category-thumbnail.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import { ImageUploadModule } from 'ng2-imageupload';
import { CategoryGalleryListComponent } from './components/category-gallery-list/category-gallery-list.component';
import { AuthModule } from '../auth/auth.module';
import { CategoryFormService } from './services/category-form.service';
import { SocialPostCategoryDialogComponent } from './social-post-category-dialog/social-post-category-dialog.component';

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
    SocialPostCategoryDialogComponent,
  ],
  entryComponents: [
    AddCategoryModalComponent,
    SocialPostCategoryDialogComponent,
  ],
  exports: [
    CategoryThumbnailComponent,
    AddCategoryModalComponent,
    CategoryGalleryListComponent,
    SocialPostCategoryDialogComponent,
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
