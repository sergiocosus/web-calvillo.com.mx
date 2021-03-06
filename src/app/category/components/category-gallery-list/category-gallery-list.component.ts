import { Component, Input, OnInit } from '@angular/core';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { MatDialog } from '@angular/material';
import { Category, CategoryService } from '@calvillo/api';
import { NotifyService } from '../../../shared/services/notify.service';

@Component({
  selector: 'app-category-gallery-list',
  templateUrl: './category-gallery-list.component.html',
  styleUrls: ['./category-gallery-list.component.scss']
})
export class CategoryGalleryListComponent implements OnInit {
  @Input() category;

  constructor(private dialog: MatDialog,
              private categoryService: CategoryService,
              private notify: NotifyService) {
  }

  ngOnInit() {
  }

  pushCategory(category) {
    this.category.categories.push(category);
  }

  openCreateCategory(category_id: number) {
    const dialog = this.dialog.open(AddCategoryModalComponent);
    dialog.componentInstance.init(category_id);
    dialog.componentInstance.created.subscribe(
      (category) => this.pushCategory(category)
    );
  }


  remove(category) {
    this.categoryService.remove(category.id).subscribe(
      deletedCategory => {
        this.notify.success('Álbum borrado');
        this.category.categories.splice(
          this.category.categories.indexOf(category), 1
        );
        this.category.deleted_categories.push(deletedCategory);
      }
    );
  }

  delete(category) {
    if (!confirm('¿Está seguro de borrarlo?')) {
      return;
    }
    this.categoryService.delete(category.id).subscribe(
      () => {
        this.notify.success('Álbum borrado permanentemente');
        this.category.deleted_categories.splice(
          this.category.deleted_categories.indexOf(category), 1
        );
      }
    );
  }

  restore(category) {
    this.categoryService.restore(category.id).subscribe(
      restoredPicture => {
        this.notify.success('Fotografía restaurada');
        this.category.deleted_directories.splice(
          this.category.deleted_directories.indexOf(category), 1
        );
        this.category.categories.push(restoredPicture);
      }
    );
  }

  edit($event: Event, category: Category) {
    $event.stopPropagation();
    const dialog = this.dialog.open(AddCategoryModalComponent);
    dialog.componentInstance.initEditMode(category);
    dialog.componentInstance.updated.subscribe(
      category => this.updateCategory(category)
    );
  }

  updateCategory(category) {
    const categories = this.category.categories;
    for (let i = 0; categories.length; i++) {
      if (categories[i].id === category.id) {
        categories[i] = category;
        break;
      }
    }
  }
}
