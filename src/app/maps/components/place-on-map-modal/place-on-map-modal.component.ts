import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';

@Component({
  selector: 'app-place-on-map-modal',
  templateUrl: './place-on-map-modal.component.html',
  styleUrls: ['./place-on-map-modal.component.scss']
})
export class PlaceOnMapModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;

  @Input() longitude;
  @Input() latitude;
  @Output() closed = new EventEmitter;

  hidden = true;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.show();
    setTimeout(() => this.hidden = false, 200);
  }
}
