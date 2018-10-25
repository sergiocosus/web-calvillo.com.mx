import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Event } from '@angular/router';

@Component({
  selector: 'app-select-from-map-modal',
  templateUrl: './select-from-map-modal.component.html',
  styleUrls: ['./select-from-map-modal.component.scss']
})
export class SelectFromMapModalComponent implements OnInit {
  static lastLongitude = -102.7104999;
  static lastLatitude = 21.8531537;
  latitudeMap = 0;
  longitudeMap = 0;
  hidden = true;

  constructor(private dialogRef: MatDialogRef<SelectFromMapModalComponent>,
              @Inject(MAT_DIALOG_DATA) public coordinates: {
                latitude: number,
                longitude: number,
              }) {
    if (!this.coordinates || !this.coordinates.latitude) {
      this.coordinates = {
        latitude: SelectFromMapModalComponent.lastLatitude,
        longitude: SelectFromMapModalComponent.lastLongitude,
      };
    }

    console.log(this.coordinates);

    this.latitudeMap = this.coordinates.latitude;
    this.longitudeMap = this.coordinates.longitude;
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(
      () => {
        SelectFromMapModalComponent.lastLongitude = this.coordinates.longitude;
        SelectFromMapModalComponent.lastLatitude = this.coordinates.latitude;
      }
    )
  }

  dragged($event) {
    this.coordinates.longitude = $event.coords.lng;
    this.coordinates.latitude = $event.coords.lat;
  }

  close() {
    this.dialogRef.close(this.coordinates);
  }
}
