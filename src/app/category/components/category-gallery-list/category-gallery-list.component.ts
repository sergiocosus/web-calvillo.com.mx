import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AddCategoryModalComponent} from '../add-category-modal/add-category-modal.component';

@Component({
  selector: 'app-category-gallery-list',
  templateUrl: './category-gallery-list.component.html',
  styleUrls: ['./category-gallery-list.component.scss']
})
export class CategoryGalleryListComponent implements OnInit {
  @ViewChild(AddCategoryModalComponent) categoryModal: AddCategoryModalComponent;

  @Input() category;

  constructor() { }

  ngOnInit() {
  }

  pushCategory(category) {
    this.category.categories.push(category);
  }
}
