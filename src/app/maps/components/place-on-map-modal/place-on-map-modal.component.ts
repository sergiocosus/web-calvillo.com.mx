import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-on-map-modal',
  templateUrl: './place-on-map-modal.component.html',
  styleUrls: ['./place-on-map-modal.component.scss']
})
export class PlaceOnMapModalComponent implements OnInit {
  @Input() longitude;
  @Input() latitude;
  title: string;
  hidden = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.hidden = false, 200);
  }

  setData(lon, lat, title) {
    this.longitude = lon;
    this.latitude = lat;
    this.title = title;
  }
}
