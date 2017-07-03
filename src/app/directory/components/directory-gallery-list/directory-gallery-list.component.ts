import {Component, Input, OnInit} from '@angular/core';
import {Directory} from '../../directory.model';
import {NotifyService} from '../../../shared/services/notify.service';
import {DirectoryService} from '../../services/directory.service';
import {MdDialog} from '@angular/material';
import {DirectoryDialogComponent} from '../directory-dialog/directory-dialog.component';
import {Category} from '../../../category/category.model';

@Component({
  selector: 'app-directory-gallery-list',
  templateUrl: './directory-gallery-list.component.html',
  styleUrls: ['./directory-gallery-list.component.scss']
})
export class DirectoryGalleryListComponent implements OnInit {
  @Input() category: Category;
  @Input() directories: Directory[];
  @Input() deleted_directories: Directory[];

  constructor(private notify: NotifyService,
              private directoryService: DirectoryService,
              private dialog: MdDialog) { }

  ngOnInit() {
  }

  pushPicture(picture) {
    this.directories.push(picture);
  }

  updatePicture(picture) {
    for (let i = 0; this.directories.length; i++) {
      if (this.directories[i].id == picture.id) {
        this.directories[i] = picture;
        break;
      }
    }
  }

  removeDirectory(directory) {
    this.directoryService.remove(directory.id).subscribe(
      deletedPicture => {
        this.notify.success('Directorio borrado');
        this.directories.splice(
          this.directories.indexOf(directory), 1
        );
        this.deleted_directories.push(deletedPicture);
      }
    );
  }

  deleteDirectory(picture) {
    if(!confirm('¿Está seguro de borrarlo?')) {
      return;
    }
    this.directoryService.delete(picture.id).subscribe(
      () => {
        this.notify.success('Directorio borrado permanentemente');
        this.deleted_directories.splice(
          this.deleted_directories.indexOf(picture), 1
        );
      }
    );
  }

  restoreDirectory(picture) {
    this.directoryService.restore(picture.id).subscribe(
      restoredPicture => {
        this.notify.success('Directorio restaurado');
        this.deleted_directories.splice(
          this.deleted_directories.indexOf(picture), 1
        );
        this.directories.push(restoredPicture);
      }
    );
  }

  editDirectory($event: Event, directory: Directory) {
    $event.stopPropagation();
    const dialog = this.dialog.open(DirectoryDialogComponent);
    dialog.componentInstance.initEditMode(directory);
    dialog.componentInstance.updated.subscribe(
      picture => this.updatePicture(picture)
    );
  }

  openDialog() {
    const dialog = this.dialog.open(DirectoryDialogComponent,{data:{createMode: true}});
    dialog.componentInstance.initCreateMode(this.category.id);
    dialog.componentInstance.created.subscribe(
      picture => this.pushPicture(picture)
    );
  }

}
