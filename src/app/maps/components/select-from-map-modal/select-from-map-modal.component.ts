import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-select-from-map-modal',
  templateUrl: './select-from-map-modal.component.html',
  styleUrls: ['./select-from-map-modal.component.scss']
})
export class SelectFromMapModalComponent implements OnInit {
  longitude = 0;
  latitude = 0;
  latitudeMap = 0;
  longitudeMap = 0;

  @Output() closed = new EventEmitter;

  hidden = true;

  constructor(private dialog: MdDialogRef<SelectFromMapModalComponent>) {
  }

  ngOnInit() {
    setTimeout(() => this.hidden = false, 200);
    this.dialog.afterClosed().subscribe(
      () => {
        this.closed.emit({
          latitude: this.latitude,
          longitude: this.longitude,
        })
      }
    )
  }

  setCoords(lon, lat) {
    if (!lon) {
      this.longitudeMap = this.longitude = -102.7104999;
      this.latitudeMap = this.latitude = 21.8531537;
    } else {
      this.longitudeMap = this.longitude = lon;
      this.latitudeMap = this.latitude = lat;
    }
  }

  dragged($event) {
    this.longitude = $event.coords.lng;
    this.latitude = $event.coords.lat;
  }
}
