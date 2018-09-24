import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/classes/custom-validator';
import { Event } from '@calvillo/api';
import { EventValidator } from '../classes/event-validator';
import { EventService } from '@calvillo/api';
import { CustomValidators } from 'ng2-validation';

@Injectable({
  providedIn: 'root'
})
export class EventFormService {

  constructor(private fb: FormBuilder,
              private eventService: EventService) {
  }

  createForm(event?: Event) {
    const form = this.fb.group({
      id: event ? event.id : null,
      title: [event ? event.title : null, [
        Validators.required
      ]],
      slug: [event ? event.slug : null, [
        Validators.required,
        CustomValidator.slug
      ],
        event ? null : EventValidator.slugExists(this.eventService)
      ],
      description: [event ? event.description : null, [Validators.required]],
      address: [event ? event.address : null, [Validators.required]],
      begin_at: [event ? event.begin_at : null, [Validators.required]],
      end_at: [event ? event.end_at : null, [Validators.required]],
      range_at: [event ? [event.begin_at, event.end_at] : null, [Validators.required]],
      notify_at: [event ? event.begin_at: null, [Validators.required]],
      src: [event ? event.imageUrl('sm') : null, [Validators.required]],
      image: null,
      latitude: [event ? event.latitude : null, [
        CustomValidators.min(-90),
        CustomValidators.max(90),
      ]],
      longitude: [event ? event.longitude : null, [
        CustomValidators.min(-180),
        CustomValidators.max(180),
      ]],
      categories: [event ? event.categories : [], []],
      directories: [event ? event.directories : [], []],
      pictures: [event ? event.pictures : [], []],
    });

    form.get('title').valueChanges.forEach(
      (title) => form.get('slug').setValue(title.replace(/[^a-z0-9]/gi, '-').toLowerCase())
    );
    form.get('range_at').valueChanges.forEach(
      (title) => {
        form.get('begin_at').setValue(title[0]);
        form.get('end_at').setValue(title[1]);
      }
    );

    return form;
  }

}
