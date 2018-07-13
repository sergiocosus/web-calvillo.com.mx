import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Picture, PictureService } from '@calvillo/api';
import { CustomValidators } from 'ng2-validation';
import { PictureValidator } from '../classes/picture-validator';
import { CustomValidator } from '../../shared/classes/custom-validator';

@Injectable()
export class PictureFormService {
  constructor(private fb: FormBuilder,
              private pictureService: PictureService) {
  }

  createForm(picture?: Picture, editMode = false) {
    const form = this.fb.group({
      id: picture ? picture.id : null,
      title: [picture ? picture.title : null, [
        Validators.required
      ]],
      link: [picture ? picture.link : null, [
        Validators.required,
        CustomValidator.slug
      ],
        editMode ? null : PictureValidator.slugExists(this.pictureService)
      ],
      description: [picture ? picture.description : null],
      latitude: [picture ? picture.latitude : null, [
        CustomValidators.min(-90),
        CustomValidators.max(90),
      ]],
      longitude: [picture ? picture.longitude : null, [
        CustomValidators.min(-180),
        CustomValidators.max(180),
      ]],
      taken_at: picture ? picture.taken_at : null,
      src: picture ? picture.imageUrl('sm') : null,
      image: null,
      categories: [picture ? picture.categories.map(category => category.id) : [], []],
    });

    form.get('title').valueChanges.forEach(
      (title) => form.get('link').setValue(title.replace(/[^a-z0-9]/gi, '-').toLowerCase())
    );

    return form;
  }
}
