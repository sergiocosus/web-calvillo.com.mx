import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Picture} from '../../picture.model';
import {UploadPictureModalComponent} from '../upload-picture-modal/upload-picture-modal.component';
import {NotifyService} from '../../../shared/services/notify.service';
import {PictureService} from '../../services/picture.service';

@Component({
  selector: 'app-picture-gallery-list',
  templateUrl: './picture-gallery-list.component.html',
  styleUrls: ['./picture-gallery-list.component.scss']
})
export class PictureGalleryListComponent implements OnInit {
  @ViewChild(UploadPictureModalComponent) pictureModal: UploadPictureModalComponent;

  @Input() category_id: number;
  @Input() pictures: Picture[] = [];
  @Input() deleted_pictures: Picture[] = [];

  constructor(private notify: NotifyService,
              private pictureService: PictureService) { }

  ngOnInit() {
  }

  pushPicture(picture) {
    this.pictures.push(picture);
  }

  updatePicture(picture) {
    for (let i = 0; this.pictures.length; i++) {
      if (this.pictures[i].id == picture.id) {
        this.pictures[i] = picture;
        break;
      }
    }
  }

  removePicture(picture) {
    this.pictureService.remove(picture.id).subscribe(
      deletedPicture => {
        this.notify.success('Fotografía borrada');
        this.pictures.splice(
          this.pictures.indexOf(picture), 1
        );
        this.deleted_pictures.push(deletedPicture);
      }
    );
  }

  deletePicture(picture) {
    this.pictureService.delete(picture.id).subscribe(
      () => {
        this.notify.success('Fotografía borrada permanentemente');
        this.deleted_pictures.splice(
          this.deleted_pictures.indexOf(picture), 1
        );
      }
    );
  }

  restorePicture(picture) {
    this.pictureService.restore(picture.id).subscribe(
      restoredPicture => {
        this.notify.success('Fotografía restaurada');
        this.deleted_pictures.splice(
          this.deleted_pictures.indexOf(picture), 1
        );
        this.pictures.push(restoredPicture);
      }
    );
  }

  editPicture($event: Event, picture: Picture) {
    $event.stopPropagation();
    this.pictureModal.openToEdit(picture);
  }
}
