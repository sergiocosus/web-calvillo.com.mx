import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CategoryThumbnailComponent } from './components/category-thumbnail/category-thumbnail.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import { CategoryGalleryListComponent } from './components/category-gallery-list/category-gallery-list.component';
import { AuthModule } from '../auth/auth.module';
import { SocialPostCategoryDialogComponent } from './social-post-category-dialog/social-post-category-dialog.component';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { CategoryChipListComponent } from './components/category-chip-list/category-chip-list.component';
import { MatAutocompleteModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    ImageToDataUrlModule,
    MatChipsModule,
    MatAutocompleteModule,
    AuthModule,
  ],
  declarations: [
    CategoryThumbnailComponent,
    AddCategoryModalComponent,
    CategoryGalleryListComponent,
    SocialPostCategoryDialogComponent,
    CategoryChipListComponent,
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
    CategoryChipListComponent,
  ]
})
export class CategoryModule {
}
