import { Component, Input, OnInit } from '@angular/core';
import { Directory } from '@calvillo/api';
import * as utils from 'utils/utils';

@Component({
  selector: 'app-directory-detail',
  moduleId: module.id,
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.scss']
})
export class DirectoryDetailComponent implements OnInit {
  @Input() directory: Directory;
  @Input() showMap = true;

  constructor(/*private dialog: MatDialog*/) {
  }

  ngOnInit() {
  }

  openMapModal() {
    /*
    const dialog = this.dialog.open(PlaceOnMapModalComponent);
    dialog.componentInstance.setData(
      this.directory.longitude,
      this.directory.latitude,
      this.directory.title
    );
    */
  }

  openUrl(url) {
    utils.openUrl(url);
  }

}
