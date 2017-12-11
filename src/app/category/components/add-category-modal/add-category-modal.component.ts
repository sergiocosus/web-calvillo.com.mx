import {Component, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Category} from '../../category.model';
import {CategoryService} from '../../services/category.service';
import {ImageResult} from 'ng2-imageupload';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubscriptionManager} from '../../../shared/classes/subscription-manager';
import {CategoryFormService} from '../../services/category-form.service';
import {CustomValidator} from '../../../shared/classes/custom-validator';
import {NotifyService} from '../../../shared/services/notify.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {
  @Output() created = new EventEmitter;
  @Output() updated = new EventEmitter;

  createMode = true;
  src: string = null;
  form: FormGroup;

  subs = new SubscriptionManager();
  categories: Category[];

  constructor(private categoryService: CategoryService,
              private dialog: MatDialogRef<AddCategoryModalComponent>,
              private fb: FormBuilder,
              private categoryFormService: CategoryFormService,
              private notify: NotifyService) {
  }

  ngOnInit() {
    this.subs.add = this.categoryService.getAllCached().subscribe(
        categories => this.categories = categories
    );
  }

  init(parent_category_id: number) {
    const category = new Category;
    category.category_id = parent_category_id;
    this.createMode = true;
    this.form = this.categoryFormService.createForm(category);
  }

  initEditMode(category: Category) {
    this.createMode = false;
    this.form = this.categoryFormService.createForm(category, true);
  }

  private createCategory(categoryData) {
    this.categoryService.post(categoryData).subscribe(
      category => {
        this.created.emit(category);
        this.dialog.close();
      }
    );
  }

  private updateCategory(categoryData) {
    this.categoryService.put(categoryData).subscribe(
      category => {
        this.updated.emit(category);
        this.dialog.close();
      }
    );
  }

  selected(imageResult: ImageResult) {
    this.form.get('src').setValue(imageResult.dataURL);
    this.form.get('image').setValue(imageResult.dataURL.split(',')[1]);
  }

  submit() {
    CustomValidator.validateAllFields(this.form);
    if (this.form.invalid) {
      this.notify.error('Hay errores en el formulario');
      return;
    }

    const categoryData = this.form.value;
    categoryData.src = undefined;
    categoryData.category_id = categoryData.category_id;
    categoryData.category = undefined;
    if (this.createMode) {
      this.createCategory(categoryData);
    } else {
      this.updateCategory(categoryData);
    }
  }

}
