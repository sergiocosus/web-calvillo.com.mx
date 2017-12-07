import {AbstractControl} from '@angular/forms';
import {CategoryService} from '../services/category.service';
import {Observable} from 'rxjs/Observable';

export class CategoryValidator {
  static slugExists(categoryService: CategoryService) {
    return (control: AbstractControl) => {
      const slug = control.value.slug || control.value;

      return categoryService.getByLink(slug)
        .map(response => (response ? {linkUsed: true}: false))
        .catch( () => Observable.of(false));
    };
  }
}
