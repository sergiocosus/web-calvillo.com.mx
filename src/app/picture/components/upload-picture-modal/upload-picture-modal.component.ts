import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';
import {ImageResult} from 'ng2-imageupload';
import {PictureService} from '../../services/picture.service';
import {EXIFService} from '../../../shared/services/exif.service';
import {Picture, PictureRequest} from '../../picture.model';

import * as moment from 'moment';
import {NotifyService} from '../../../shared/services/notify.service';

@Component({
  selector: 'app-upload-picture-modal',
  templateUrl: './upload-picture-modal.component.html',
  styleUrls: ['./upload-picture-modal.component.scss']
})
export class UploadPictureModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @Output() created = new EventEmitter;

  takeTitleFromFiles = false;

  pictures: PictureRequest[] = [];
  currentUploadingPicture = null;
  parent_category_id: number = null;
  uploading = false;
  constructor(private pictureService: PictureService,
              private exifService: EXIFService,
              private notify: NotifyService
  ) { }

  ngOnInit() {
  }

  open(parent_category_id: number) {
    this.parent_category_id = parent_category_id;
    this.pictures = [];
    this.currentUploadingPicture = null;
    this.uploading = false;
    this.modal.show();
  }



  selected(imageResult: ImageResult) {
    console.log(imageResult);
    let  picture = new PictureRequest();
    picture.category_id = this.parent_category_id;
    picture.src = imageResult.dataURL;
    picture.image = picture.src ? picture.src.split(',')[1] : null;
    if (this.takeTitleFromFiles) {
      let filename = imageResult.file.name;
      picture.title = filename.replace(/\.[^/.]+$/, "");
      picture.link = picture.title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }
    this.pictures.push(picture);

    this.processExif(imageResult.dataURL, picture);
  }

  processExif(base64, picture: PictureRequest) {
    try {
      let exif = this.exifService.readEXIFFromBase64(base64);
      console.log(exif);
      if (exif.DateTime) {
        let dateTime = moment(exif.DateTime, 'YYYY:MM:DD hh:mm:ss');
        picture.taken_at = <any>dateTime;
      }
    } catch (e) {
      console.error('Error getting datetime from exif',e);
    }
  }

  remove(picture: PictureRequest) {
    let index = this.pictures.indexOf(picture);
    this.pictures.splice(index, 1);
  }

  titleChanged(picture: PictureRequest){
    picture.link = picture.title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
  }

  submit() {
    this.currentUploadingPicture = 0;
    this.selectPictureToUpload();
  }

  selectPictureToUpload() {
    if (this.pictures.length) {
      this.uploadPicture(this.pictures[this.currentUploadingPicture]);
     // this.currentUploadingPicture++;
    } else {
      this.pictures = [];
      this.modal.hide();
      this.notify.success('Las fotografias han sido subidas'  );
    }
  }

  uploadPicture(pictureRequest: PictureRequest) {
    this.uploading = true;
    this.pictureService.post(pictureRequest).subscribe(
      picture => {
        this.created.emit(picture);
        console.log('Uploaded: ' + picture.title);
        this.remove(pictureRequest);
        this.selectPictureToUpload();
        this.uploading = false;
      },
      error => {
        this.notify.serviceError(error);
        this.uploading = false;
      }
    );
  }
}
