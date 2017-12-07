import {PictureService} from '../services/picture.service';
import {AbstractControl} from '@angular/forms';

export class PictureValidator {
  static slugExists(pictureService: PictureService) {
    return (control: AbstractControl) => {
      const slug = control.value.slug || control.value;

      return pictureService.getLinkExists(slug)
        .map(response => (response.exists ? {linkUsed: response.exists}: false));
    };
  }
}
