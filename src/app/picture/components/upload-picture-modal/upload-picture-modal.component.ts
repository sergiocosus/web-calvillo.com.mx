import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';
import {ImageResult} from 'ng2-imageupload';
import {PictureService} from '../../services/picture.service';
import {EXIFService} from '../../../shared/services/exif.service';
import {Picture} from '../../picture.model';

import * as moment from 'moment';

@Component({
  selector: 'app-upload-picture-modal',
  templateUrl: './upload-picture-modal.component.html',
  styleUrls: ['./upload-picture-modal.component.scss']
})
export class UploadPictureModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @Output() created = new EventEmitter;
  src: string = null;
  picture: Picture;
  constructor(private pictureService: PictureService,
              private exifService: EXIFService) { }

  ngOnInit() {
  }

  open(parent_category_id: number) {
    this.picture = new Picture;
    this.picture['category_id'] = parent_category_id;
    this.modal.show();
  }

  submit() {
    let cat = <any> this.picture;
    cat.image = this.src ? this.src.split(',')[1] : null;
    this.pictureService.post(this.picture).subscribe(
      category => {
        this.created.emit(category);
        this.modal.hide();
      }
    )
  }

  selected(imageResult: ImageResult) {
    this.src = imageResult.dataURL;
    let exif = this.exifService.readEXIFFromBase64(imageResult.dataURL);
    let dateTime = moment(exif.DateTime, 'YYYY:MM:DD hh:mm:ss');
    this.picture.taken_at = <any>dateTime.utc(true).toISOString().slice(0,19)

    console.log(exif);
    console.log(dateTime);
  }
}
