import { map } from 'rxjs/operators';
import { PictureService } from '@calvillo/api';
import { AbstractControl } from '@angular/forms';

export class PictureValidator {
  static slugExists(pictureService: PictureService) {
    return (control: AbstractControl) => {
      const slug = control.value.slug || control.value;

      return pictureService.getLinkExists(slug).pipe(
        map(response => (response.exists ? {linkUsed: response.exists} : false)));
    };
  }
}
