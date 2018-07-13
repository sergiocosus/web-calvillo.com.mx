import { of as observableOf } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { CategoryService } from '@calvillo/api/services/category.service';

export class CategoryValidator {
  static slugExists(categoryService: CategoryService) {
    return (control: AbstractControl) => {
      const slug = control.value.slug || control.value;

      return categoryService.getByLink(slug).pipe(
        map(response => (response ? {linkUsed: true} : false)),
        catchError(() => observableOf(false)),);
    };
  }
}
