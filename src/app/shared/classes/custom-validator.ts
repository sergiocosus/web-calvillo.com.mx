import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

export class CustomValidator {
  static slug(control: AbstractControl) {
    const re = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

    return re.test(control.value) ? null : {slug: true};
  }

  static rfc(control: AbstractControl) {
    const rfcPattern = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    return Validators.pattern(rfcPattern)(control);
  }

  static validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

  static validateFormArray(formArray: FormArray) {
    formArray.controls.forEach(
      form => this.validateAllFields(form as FormGroup)
    );
  }
}
