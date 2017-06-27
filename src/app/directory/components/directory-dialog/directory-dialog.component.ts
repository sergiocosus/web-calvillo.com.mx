import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {DirectoryService} from '../../services/directory.service';
import {ImageResult} from 'ng2-imageupload';
import {Directory} from '../../directory.model';

@Component({
  selector: 'app-directory-dialog',
  templateUrl: './directory-dialog.component.html',
  styleUrls: ['./directory-dialog.component.scss']
})
export class DirectoryDialogComponent implements OnInit {
  @Output() created = new EventEmitter;
  @Output() updated = new EventEmitter;

  createMode = true;
  src: string = null;
  form: FormGroup;

  constructor(private directoryService: DirectoryService,
              private dialog: MdDialogRef<DirectoryDialogComponent>,
              private fb: FormBuilder) {

  }

  createForm(directory: Directory, parent_category_id?: number) {
    this.form = this.fb.group({
      id: [directory.id, []],
      title: [directory.title, [Validators.required]],
      link: [directory.link, [Validators.required]],
      description: [directory.description, []],
      address: [directory.address, []],
      email: [directory.email, []],
      phone: [directory.phone, []],
      cellphone: [directory.cellphone, []],
      website_url: [directory.website_url, []],
      youtube_url: [directory.youtube_url, []],
      facebook_url: [directory.facebook_url, []],
      latitude: [directory.latitude, []],
      longitude: [directory.longitude, []],
      image: [],
      src: [directory.image_url],
      category_id: parent_category_id
    });
  }

  ngOnInit() {
  }

  initCreateMode(parent_category_id: number) {
    const directory = new Directory();
    this.createMode = true;
    this.createForm(directory, parent_category_id);
  }

  initEditMode(directory: Directory) {
    this.createMode = false;
    this.createForm(directory);
  }



  private createCategory(categoryData) {
    this.directoryService.post(categoryData).subscribe(
      category => {
        this.created.emit(category);
        this.dialog.close();
      }
    );
  }

  private updateCategory(categoryData) {
    this.directoryService.put(categoryData).subscribe(
      category => {
        this.updated.emit(category);
        this.dialog.close();
      }
    );
  }

  selected(imageResult: ImageResult) {
    console.log(imageResult);
    this.form.get('src').setValue(imageResult.dataURL);
    this.form.get('image').setValue(imageResult.dataURL.split(',')[1]);
  }

  submit() {
    const categoryData = this.form.value;
    categoryData.src = undefined;
    if (this.createMode) {
      this.createCategory(categoryData);
    } else {
      this.updateCategory(categoryData);
    }
  }

}
