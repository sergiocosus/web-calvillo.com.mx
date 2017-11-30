import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Picture} from '../../picture.model';
import {UploadPictureModalComponent} from '../upload-picture-modal/upload-picture-modal.component';
import {NotifyService} from '../../../shared/services/notify.service';
import {PictureService} from '../../services/picture.service';
import {MatDialog} from '@angular/material';
import {Category} from '../../../category/category.model';

@Component({
  selector: 'app-picture-gallery-list',
  templateUrl: './picture-gallery-list.component.html',
  styleUrls: ['./picture-gallery-list.component.scss'],
})
export class PictureGalleryListComponent implements OnInit {
  @Input() category: Category;
  @Input() pictures: Picture[] = [];
  @Input() deleted_pictures: Picture[] = [];

  constructor(private notify: NotifyService,
              private pictureService: PictureService,
              private dialog: MatDialog) { }

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
    if(!confirm('¿Está seguro de borrarlo?')) {
      return;
    }
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
    const dialog = this.dialog.open(UploadPictureModalComponent);
    dialog.componentInstance.initEditMode(picture);
    dialog.componentInstance.updated.subscribe(
      picture => this.updatePicture(picture)
    );
  }

  openDialog() {
    const dialog = this.dialog.open(UploadPictureModalComponent,{data:{createMode: true}});
    dialog.componentInstance.initCreateMode(this.category);
    dialog.componentInstance.created.subscribe(
      picture => this.pushPicture(picture)
    );
  }
}
