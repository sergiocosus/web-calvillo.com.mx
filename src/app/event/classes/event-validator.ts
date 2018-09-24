import { of as observableOf } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { EventService } from '@calvillo/api';

export class EventValidator {
  static slugExists(eventService: EventService) {
    return (control: AbstractControl) => {
      const slug = control.value.slug || control.value;

      return eventService.getBySlug(slug).pipe(
        map(response => (response ? {linkUsed: true} : false)),
        catchError(() => observableOf(false)));
    };
  }
}
