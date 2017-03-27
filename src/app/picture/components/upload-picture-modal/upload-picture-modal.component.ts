import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';
import {ImageResult} from 'ng2-imageupload';
import {PictureService} from '../../services/picture.service';
import {EXIFService} from '../../../shared/services/exif.service';
import {Picture, PictureRequest} from '../../picture.model';

import * as moment from 'moment';

@Component({
  selector: 'app-upload-picture-modal',
  templateUrl: './upload-picture-modal.component.html',
  styleUrls: ['./upload-picture-modal.component.scss']
})
export class UploadPictureModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @Output() created = new EventEmitter;
  pictures: PictureRequest[] = [];
  currentUploadingPicture = null;
  parent_category_id: number = null;
  uploading = false;
  constructor(private pictureService: PictureService,
              private exifService: EXIFService) { }

  ngOnInit() {
  }

  open(parent_category_id: number) {
    this.parent_category_id = parent_category_id;
    this.pictures = [];
    this.currentUploadingPicture = null;
    this.uploading = false;
    this.modal.show();
  }

  submit() {
    this.currentUploadingPicture = 0;
    this.selectPictureToUpload();
  }

  selectPictureToUpload() {
    if (this.pictures.length >= (this.currentUploadingPicture + 1)) {
      this.uploadPicture(this.pictures[this.currentUploadingPicture]);
      this.currentUploadingPicture++;
    } else {
      this.pictures = [];
      this.modal.hide();
    }
  }

  uploadPicture(picture: PictureRequest) {
    this.pictureService.post(picture).subscribe(
      category => {
        this.created.emit(category);
        console.log(picture, 'uploaded');
        this.selectPictureToUpload();
      }
    );
  }

  selected(imageResult: ImageResult) {
    console.log(imageResult);
    let  picture = new PictureRequest();
    picture.category_id = this.parent_category_id;
    picture.src = imageResult.dataURL;
    picture.image = picture.src ? picture.src.split(',')[1] : null;

    this.pictures.push(picture);

    this.processExif(imageResult.dataURL, picture);
  }

  processExif(base64, picture: PictureRequest) {
    try {
      let exif = this.exifService.readEXIFFromBase64(base64);
      if (exif.DateTime) {
        let dateTime = moment(exif.DateTime, 'YYYY:MM:DD hh:mm:ss');
        picture.taken_at = <any>dateTime;
      }
    } catch (e) {
      console.error('Error getting datetime from exif',e);
    }
  }
}
