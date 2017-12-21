import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {ImageResult} from 'ng2-imageupload';
import {PictureService} from '../../services/picture.service';
import {EXIFService} from '../../../shared/services/exif.service';
import {Picture} from '../../picture.model';

import {NotifyService} from '../../../shared/services/notify.service';
import {SelectFromMapModalComponent} from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Category} from '../../../category/category.model';
import {CategoryService} from '../../../category/services/category.service';
import {SubscriptionManager} from '../../../shared/classes/subscription-manager';
import {AutoUnsubscribe} from '../../../shared/classes/auto-unsubscribe';
import {PictureFormService} from '../../services/picture-form.service';
import {CustomValidator} from '../../../shared/classes/custom-validator';

@Component({
  selector: 'app-upload-picture-modal',
  templateUrl: './upload-picture-modal.component.html',
  styleUrls: ['./upload-picture-modal.component.scss'],
})
@AutoUnsubscribe()
export class UploadPictureModalComponent implements OnInit {
  @Output() created = new EventEmitter;
  @Output() updated = new EventEmitter;

  takeTitleFromFiles = true;
  currentUploadingPicture = null;
  parent_category: Category;
  uploading = false;

  createMode = true;
  formGroup: FormGroup;
  pictureOnModal: FormGroup = null;

  subs = new SubscriptionManager;
  step = 0;
  lastStep = 0;
  categories: Category[];

  constructor(private pictureService: PictureService,
              private exifService: EXIFService,
              private notify: NotifyService,
              private fb: FormBuilder,
              private uploadPictureDialog: MatDialogRef<UploadPictureModalComponent>,
              private dialog: MatDialog,
              private categoryService: CategoryService,
              private pictureFormService: PictureFormService,
  ) {
    this.uploadPictureDialog.disableClose = true;

    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      pictures: this.fb.array([])
    });
  }

  ngOnInit() {
    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => this.categories = categories
    );
  }

  get formArray(): FormArray {
    return this.formGroup.get('pictures') as FormArray;
  }

  initCreateMode(parentCategory: Category) {
    this.createMode = true;
    this.parent_category = parentCategory;
    this.currentUploadingPicture = null;
    this.uploading = false;
  }

  initEditMode(picture: Picture) {
    this.createMode = false;
    const form = this.pictureFormService.createForm(picture, true);
    this.formArray.push(form);
    for (var i in form.controls) {
      form.controls[i].markAsTouched();
    }
  }

  selected(imageResult: ImageResult) {
    const picture = this.pictureFormService.createForm();

    if (this.takeTitleFromFiles) {
      let filename = imageResult.file.name;
      picture.patchValue({
        title: filename.replace(/\.[^/.]+$/, ""),
      });
    }

    let src = imageResult.dataURL;
    let image = src ? src.split(',')[1] : null;

    picture.patchValue({
      categories : [this.parent_category.id],
      description: '',
      src: src,
      image: image,
      taken_at: this.exifService.getDateTimeFromPicture(image)
    });
    this.formArray.push(picture);
    CustomValidator.validateAllFields(picture);
  }

  remove(picture: FormGroup) {
    let index = this.formArray.controls.indexOf(picture);
    this.formArray.controls.splice(index, 1);
  }

  submit() {
    CustomValidator.validateFormArray(this.formArray);
    if (this.formArray.invalid) {
      this.notify.error('Hay errores en el formulario');
      console.log(this.formArray);
      return;
    }


    this.currentUploadingPicture = 0;
    this.step = -1;
    this.selectPictureToUpload();
  }

  selectPictureToUpload() {
    if (this.formArray.controls.length) {
      let formToProcess = this.formArray.controls[this.currentUploadingPicture] as FormGroup;
      console.log(formToProcess);
      if (this.createMode) {
        this.uploadPicture(formToProcess);
      } else {
        this.putPicture(formToProcess);
      }
    } else {
      this.uploadPictureDialog.close();
      this.notify.success('Las fotografias han sido subidas');
    }
  }

  uploadPicture(formGroup: FormGroup) {
    this.uploading = true;
    const pictureData = formGroup.value;
    pictureData.src = null;

    this.pictureService.post(pictureData).subscribe(
      picture => {
        this.created.emit(picture);
        console.log('Uploaded: ' + picture.title);
        this.remove(formGroup);
        this.selectPictureToUpload();
      },
      error => {
        this.notify.serviceError(error);
        this.uploading = false;
      }
    );
  }

  putPicture(formGroup: FormGroup) {
      console.log(formGroup);
      this.uploading = true;
    const pictureData = formGroup.value;

    this.pictureService.put(pictureData).subscribe(
      picture => {
        this.updated.emit(picture);
        this.remove(formGroup);
        this.selectPictureToUpload();
        this.uploading = false;
      },
      error => {
        this.notify.serviceError(error);
        this.uploading = false;
      }
    );
  }

  openMapModal(picture: FormGroup) {
    this.pictureOnModal = picture;
    const dialog = this.dialog.open(SelectFromMapModalComponent);
    dialog.componentInstance.setCoords(
      +picture.get('longitude').value,
      +picture.get('latitude').value,
    );
    dialog.componentInstance.closed.subscribe(
      coordinates => this.setCoordinates(coordinates)
    );
  }

  setCoordinates(coordinates) {
    this.pictureOnModal.patchValue({
      longitude: coordinates.longitude,
      latitude: coordinates.latitude
    });
  }

  setStep(index: number) {
    this.lastStep = this.step;
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
