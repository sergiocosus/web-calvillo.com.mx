import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';

@Component({
  selector: 'app-select-from-map-modal',
  templateUrl: './select-from-map-modal.component.html',
  styleUrls: ['./select-from-map-modal.component.scss']
})
export class SelectFromMapModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;

  longitude = 0;
  latitude = 0;
  latitudeMap = 0;
  longitudeMap = 0;

  @Output() closed = new EventEmitter;

  hidden = true;

  constructor() { }

  ngOnInit() {
    this.modal.onHide.subscribe(
      hide => {
        this.closed.emit({
          latitude: this.latitude,
          longitude: this.longitude,
        })
      }
    )
  }

  openModal() {
    this.modal.show();
    this.longitudeMap = this.longitude = -102.7104999;
    this.latitudeMap = this.latitude = 21.8531537;
    setTimeout(() => this.hidden = false, 200);
  }

  dragged($event) {
    this.longitude = $event.coords.lng;
    this.latitude = $event.coords.lat;
  }
}
