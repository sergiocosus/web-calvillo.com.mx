import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {ImageResult} from 'ng2-imageupload';
import {PictureService} from '../../services/picture.service';
import {EXIFService} from '../../../shared/services/exif.service';
import {Picture, PictureRequest} from '../../picture.model';

import {NotifyService} from '../../../shared/services/notify.service';
import {SelectFromMapModalComponent} from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Category} from '../../../category/category.model';
import {CategoryService} from '../../../category/services/category.service';
import {SubscriptionManager} from '../../../shared/classes/subscription-manager';
import {AutoUnsubscribe} from '../../../shared/classes/auto-unsubscribe';

@Component({
  selector: 'app-upload-picture-modal',
  templateUrl: './upload-picture-modal.component.html',
  styleUrls: ['./upload-picture-modal.component.scss'],
})
@AutoUnsubscribe()
export class UploadPictureModalComponent implements OnInit {
  @Output() created = new EventEmitter;
  @Output() updated = new EventEmitter;

  takeTitleFromFiles = false;
  currentUploadingPicture = null;
  parent_category: Category;
  uploading = false;

  createMode = true;
  formGroup: FormGroup;
  pictureOnModal: FormGroup = null;

  subs = new SubscriptionManager;

  constructor(private pictureService: PictureService,
              private exifService: EXIFService,
              private notify: NotifyService,
              private fb: FormBuilder,
              private uploadPictureDialog: MatDialogRef<UploadPictureModalComponent>,
              private dialog: MatDialog,
              private categoryService: CategoryService
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

  }

  get formArray(): FormArray {
    return this.formGroup.get('pictures') as FormArray;
  }

  validateLink(formGroup: FormGroup, link) {
    this.pictureService.getLinkExists(link).subscribe(
      success => {
        formGroup.patchValue({linkUsed: success.exists});
      }
    );
  }

  initCreateMode(parentCategory: Category) {
    this.createMode = true;
    this.parent_category = parentCategory;
    this.currentUploadingPicture = null;
    this.uploading = false;
  }

  initEditMode(picture: Picture) {
    this.createMode = false;
    let pictureData = new PictureRequest;

    pictureData.id = picture.id;
    pictureData.title = picture.title;
    pictureData.link  = picture.link;
    pictureData.description = picture.description;
    pictureData.src = picture.imageUrl('sm');
    pictureData.taken_at = picture.taken_at;
    pictureData.latitude = picture.latitude;
    pictureData.longitude = picture.longitude;
    pictureData.categories = picture.categories;

    this.formArray.push(this.createPictureFormGroup(pictureData));
  }

  selected(imageResult: ImageResult) {
    let pictureData = new PictureRequest;

    if (this.takeTitleFromFiles) {
      let filename = imageResult.file.name;
      pictureData.title = filename.replace(/\.[^/.]+$/, "");
      pictureData.link  = pictureData.title
        .replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }

    pictureData.categories = [this.parent_category];
    pictureData.description = '';
    pictureData.src = imageResult.dataURL;
    pictureData.image = pictureData.src ? pictureData.src.split(',')[1] : null;
    pictureData.taken_at = this.exifService.getDateTimeFromPicture(pictureData.image);

    const picture = this.createPictureFormGroup(pictureData);
    this.formArray.push(picture);
  }

  createPictureFormGroup(pictureData: PictureRequest) {
    const picture = this.fb.group({
      id: pictureData.id,
      title: [pictureData.title, [
        Validators.required
      ]],
      link: [pictureData.link, [
        Validators.required
      ]],
      description: pictureData.description,
      latitude: [pictureData.latitude, [
        CustomValidators.min(-90),
        CustomValidators.max(90),
      ]],
      longitude: [pictureData.longitude, [
        CustomValidators.min(-180),
        CustomValidators.max(180),
      ]],
      taken_at: pictureData.taken_at,
      src: pictureData.src,
      image: pictureData.image,
      linkUsed: false,
      categories: [],
    });

    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => {
        picture.get('categories').setValue(categories.filter(
          category => pictureData.categories.find(
            categoryPicture => categoryPicture.id === category.id
          )
        ));
      }
    );

    let link = picture.get('link');

    picture.get('title').valueChanges.forEach(
      (title) => link.setValue(title.replace(/[^a-z0-9]/gi, '-').toLowerCase())
    );

    this.validateLink(picture, link.value);
    link.valueChanges.forEach(
      (link) => this.validateLink(picture, link)
    );

    return picture;
  }

  remove(picture: FormGroup) {
    let index = this.formArray.controls.indexOf(picture);
    this.formArray.controls.splice(index, 1);
  }

  submit() {
    this.currentUploadingPicture = 0;
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
    pictureData.categories = pictureData.categories.map(
      category => category.id
    );

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
    pictureData.categories = pictureData.categories.map(
      category => category.id
    );

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
}
