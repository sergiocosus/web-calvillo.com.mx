import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import {
  Category,
  CategoryService,
  Directory,
  DirectoryService
} from '@calvillo/api';
import { SelectFromMapModalComponent } from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';
import { SubscriptionManager } from '../../../shared/classes/subscription-manager';
import { AutoUnsubscribe } from '../../../shared/classes/auto-unsubscribe';
import { ImageResult } from 'ngx-image2dataurl';

@Component({
  selector: 'app-directory-dialog',
  templateUrl: './directory-dialog.component.html',
  styleUrls: ['./directory-dialog.component.scss']
})
@AutoUnsubscribe()
export class DirectoryDialogComponent implements OnInit {
  @Output() created = new EventEmitter;
  @Output() updated = new EventEmitter;

  createMode = true;
  src: string = null;
  form: FormGroup;

  subs = new SubscriptionManager();
  categories: Category[];

  constructor(private directoryService: DirectoryService,
              private categoryService: CategoryService,
              private dialogRef: MatDialogRef<DirectoryDialogComponent>,
              private dialog: MatDialog,
              private fb: FormBuilder) {

  }

  createForm(directory: Directory, parent_category_id?: number) {
    this.form = this.fb.group({
      id: [directory.id, []],
      type: [directory.type, [Validators.required]],
      title: [directory.title, [Validators.required]],
      link: [directory.link, [Validators.required]],
      description: [directory.description, []],
      address: [directory.address, []],
      email: [directory.email, []],
      phone: [directory.phone, []],
      cellphone: [directory.cellphone, []],
      schedule: [directory.schedule, []],
      website_url: [directory.website_url, []],
      youtube_url: [directory.youtube_url, []],
      facebook_url: [directory.facebook_url, []],
      twitter_url: [directory.twitter_url, []],
      latitude: [directory.latitude, []],
      longitude: [directory.longitude, []],
      image: [],
      src: [directory.image_url],
      categories: [],
    });


  }

  ngOnInit() {
    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => this.categories = categories
    );
  }

  initCreateMode(parent_category_id: number) {
    const directory = new Directory();
    this.createMode = true;
    this.createForm(directory, parent_category_id);
    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => {
        this.form.get('categories').setValue(categories.filter(
          category => category.id == parent_category_id
        ));
      }
    );
  }

  initEditMode(directory: Directory) {
    this.createMode = false;
    this.createForm(directory);
    console.log(directory.categories);
    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => {
        this.form.get('categories').setValue(categories.filter(
          category => directory.categories.find(
            categoryPicture => categoryPicture.id === category.id
          )
        ));
      }
    );
  }

  selected(imageResult: ImageResult) {
    console.log(imageResult);
    this.form.get('src').setValue(imageResult.dataURL);
    this.form.get('image').setValue(imageResult.dataURL.split(',')[1]);
  }

  openMapModal() {
    const dialog = this.dialog.open(SelectFromMapModalComponent);
    dialog.componentInstance.setCoords(
      +this.form.get('longitude').value,
      +this.form.get('latitude').value,
    );
    dialog.componentInstance.closed.subscribe(
      coordinates => {
        this.form.patchValue({
          longitude: coordinates.longitude,
          latitude: coordinates.latitude
        });
      }
    );
  }

  submit() {
    const categoryData = this.form.value;
    categoryData.src = undefined;
    categoryData.categories = categoryData.categories.map(
      category => category.id
    );
    if (this.createMode) {
      this.createCategory(categoryData);
    } else {
      this.updateCategory(categoryData);
    }
  }

  private createCategory(categoryData) {
    this.directoryService.post(categoryData).subscribe(
      category => {
        this.created.emit(category);
        this.dialogRef.close();
      }
    );
  }

  private updateCategory(categoryData) {
    this.directoryService.put(categoryData).subscribe(
      category => {
        this.updated.emit(category);
        this.dialogRef.close();
      }
    );
  }

}
