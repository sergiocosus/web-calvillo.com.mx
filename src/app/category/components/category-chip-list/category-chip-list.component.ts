import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../../../projects/calvillo/api/src/models/category.model';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {
  debounceTime,
  distinctUntilChanged,
  flatMap,
  startWith
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CategoryService } from '../../../../../projects/calvillo/api/src/services/category.service';

@Component({
  selector: 'app-category-chip-list',
  templateUrl: './category-chip-list.component.html',
  styleUrls: ['./category-chip-list.component.scss']
})
export class CategoryChipListComponent implements OnInit {
  @Input() fieldControl;

  categoriesFound$: Observable<Category[]>;
  categorySearchControl = new FormControl();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.initSearch();
  }

  /**
   * Add category form control
   * @param {Category} category
   */
  removeCategory(category: Category): void {
    const index = this.fieldControl.get('categories')
      .value.findIndex(category2 => category2.id === category.id);

    this.fieldControl.value.splice(index, 1);
  }

  /**
   * Remove category form control
   * @param {MatAutocompleteSelectedEvent} event
   */
  addCategory(event: MatAutocompleteSelectedEvent) {
    const category: Category = event.option.value;

    const index = this.fieldControl.value.findIndex(person2 => person2.id === category.id);
    if (index === -1) {
      this.fieldControl.value.push(category);
      // The next line is not working so there is a fix in the template
      this.categorySearchControl.setValue('');
    }
  }

  /**
   * Initialize the search input for categories
   */
  private initSearch() {
    this.categoriesFound$ = this.categorySearchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250),
      startWith(' '),
      flatMap(
        value => this.categoryService.getAll({search: value, limit: 30})
      )
    );
  }
}
