import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';
import {ImageResult} from 'ng2-imageupload';
import {PictureService} from '../../services/picture.service';
import {EXIFService} from '../../../shared/services/exif.service';
import {PictureRequest} from '../../picture.model';

import * as moment from 'moment';
import {NotifyService} from '../../../shared/services/notify.service';
import {SelectFromMapModalComponent} from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-upload-picture-modal',
  templateUrl: './upload-picture-modal.component.html',
  styleUrls: ['./upload-picture-modal.component.scss']
})
export class UploadPictureModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @ViewChild(SelectFromMapModalComponent) mapModal: SelectFromMapModalComponent;

  @Output() created = new EventEmitter;

  takeTitleFromFiles = false;

  pictures: PictureRequest[] = [];
  currentUploadingPicture = null;
  parent_category_id: number = null;
  uploading = false;

  formGroup: FormGroup;

  pictureOnModal: FormGroup = null;

  constructor(private pictureService: PictureService,
              private exifService: EXIFService,
              private notify: NotifyService,
              private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      pictures: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  initForm() {
    this.formGroup.reset();
    // this.setAddresses(this.hero.addresses);

    this.formArray.controls.forEach(
      pictureControl => {
        console.log(pictureControl);
      }
    )
  }

  get formArray(): FormArray {
    return this.formGroup.get('pictures') as FormArray;
  }

  addPicture() {
  }

  initPictureFormGroup(formGroup: FormGroup) {
    let title = formGroup.get('title');
    let link = formGroup.get('link');

    title.valueChanges.forEach(
      (title) => link.setValue(title.replace(/[^a-z0-9]/gi, '-').toLowerCase())
    );

    this.validateLink(formGroup, link.value);

    link.valueChanges.forEach(
      (link) => this.validateLink(formGroup, link)
    );
  }

  validateLink(formGroup: FormGroup, link) {
    this.pictureService.getLinkExists(link).subscribe(
      success => {
        formGroup.patchValue({linkUsed: success.exists});
      }
    );
  }

  open(parent_category_id: number) {
    this.initForm();
    this.addPicture();
    this.parent_category_id = parent_category_id;
    this.pictures = [];
    this.currentUploadingPicture = null;
    this.uploading = false;
    this.modal.show();
  }

  selected(imageResult: ImageResult) {
    console.log(imageResult);
    let title;
    let link;
    if (this.takeTitleFromFiles) {
      let filename = imageResult.file.name;
      title = filename.replace(/\.[^/.]+$/, "");
      link  = title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }
    let image = imageResult.dataURL;

    const picture = this.fb.group({
      title: [title, [
        Validators.required
      ]],
      link: [link, [
        Validators.required
      ]],
      description: '',
      latitude: [null, [
        CustomValidators.min(-90),
        CustomValidators.max(90),
      ]],
      longitude: [null, [
        CustomValidators.min(-180),
        CustomValidators.max(180),
      ]],
      taken_at: this.processExif(image),
      category_id: this.parent_category_id,
      src: image,
      image: image ? image.split(',')[1] : null,
      linkUsed: false
    });

    this.initPictureFormGroup(picture);

    this.formArray.push(picture);
  }

  processExif(base64) {
    try {
      let exif = this.exifService.readEXIFFromBase64(base64);
      console.log(exif);
      if (exif.DateTime) {
        let dateTime = moment(exif.DateTime, 'YYYY:MM:DD hh:mm:ss');
        return dateTime as any;
      }
    } catch (e) {
      console.error('Error getting datetime from exif',e);
    }
    return null;
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
      this.uploadPicture(this.formArray.controls[this.currentUploadingPicture] as FormGroup);
     // this.currentUploadingPicture++;
    } else {
      this.pictures = [];
      this.modal.hide();
      this.notify.success('Las fotografias han sido subidas'  );
    }
  }

  uploadPicture(formGroup: FormGroup) {
    this.uploading = true;
    this.pictureService.post(formGroup.value).subscribe(
      picture => {
        this.created.emit(picture);
        console.log('Uploaded: ' + picture.title);
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
    this.mapModal.openModal();
  }

  setCoordinates(coordinates) {
    this.pictureOnModal.patchValue({
      longitude: coordinates.longitude,
      latitude: coordinates.latitude
    });
  }
}
