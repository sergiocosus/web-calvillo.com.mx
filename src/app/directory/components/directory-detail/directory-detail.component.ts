import { Component, Input, OnInit } from '@angular/core';
import { Directory } from '@calvillo/api/models/directory.model';
import { PlaceOnMapModalComponent } from "../../../maps/components/place-on-map-modal/place-on-map-modal.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-directory-detail',
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.scss']
})
export class DirectoryDetailComponent implements OnInit {
  @Input() directory: Directory;
  @Input() showMap = true;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openMapModal() {
    const dialog = this.dialog.open(PlaceOnMapModalComponent);
    dialog.componentInstance.setData(
      this.directory.longitude,
      this.directory.latitude,
      this.directory.title
    );
  }
}
