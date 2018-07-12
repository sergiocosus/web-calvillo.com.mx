
import {of as observableOf, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {AbstractControl} from '@angular/forms';
import {CategoryService} from '../services/category.service';

export class CategoryValidator {
  static slugExists(categoryService: CategoryService) {
    return (control: AbstractControl) => {
      const slug = control.value.slug || control.value;

      return categoryService.getByLink(slug).pipe(
        map(response => (response ? {linkUsed: true}: false)),
        catchError( () => observableOf(false)),);
    };
  }
}
