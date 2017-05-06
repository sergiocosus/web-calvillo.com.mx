import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AddCategoryModalComponent} from '../add-category-modal/add-category-modal.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-category-gallery-list',
  templateUrl: './category-gallery-list.component.html',
  styleUrls: ['./category-gallery-list.component.scss']
})
export class CategoryGalleryListComponent implements OnInit {
  @Input() category;

  constructor(private dialog: MdDialog) { }

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
}
