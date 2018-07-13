import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/classes/custom-validator';
import { Category } from '@calvillo/api/models/category.model';
import { CategoryValidator } from '../classes/category-validator';
import { CategoryService } from '@calvillo/api/services/category.service';

@Injectable()
export class CategoryFormService {

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService) {
  }

  createForm(category?: Category, editMode = false) {
    const form = this.fb.group({
      id: category ? category.id : null,
      title: [category ? category.title : null, [
        Validators.required
      ]],
      link: [category ? category.link : null, [
        Validators.required,
        CustomValidator.slug
      ],
        editMode ? null : CategoryValidator.slugExists(this.categoryService)
      ],
      description: [category ? category.description : null, [Validators.required]],
      src: [category ? category.imageUrl('sm') : null, [Validators.required]],
      image: null,
      category_id: [category ? category.category_id : null, []],
    });

    form.get('title').valueChanges.forEach(
      (title) => form.get('link').setValue(title.replace(/[^a-z0-9]/gi, '-').toLowerCase())
    );

    return form;
  }

}
