import {
  Component, OnInit, Input, HostBinding, HostListener, ViewChild, transition, style,
  trigger, animate
} from '@angular/core';
import {Directory} from './directory.model';
import {ModalDirective} from 'ng2-bootstrap';
import {PlaceOnMapModalComponent} from '../maps/components/place-on-map-modal/place-on-map-modal.component';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  animations: [
    trigger('directory', [
      transition('void => active', [
        style({
          transform: 'scale(.5)',
          opacity: 0
        }),
        animate('500ms ease-out', style({
          transform: 'scale(1)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        animate('500ms ease-out', style({
          opacity: 0,
          zIndex: 0,
          transform: 'scale(.5)',
        }))
      ])
    ])
  ]
})
export class DirectoryComponent implements OnInit {
  @ViewChild(PlaceOnMapModalComponent) mapModal: PlaceOnMapModalComponent;

  @HostBinding('class.expanded') expanded = false;
  @HostListener('click') clicked () {
    this.show();
  }

  @Input() category_id: number;
  @Input() directory: Directory;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.expanded = true;
  }

  openMapModal() {
    this.mapModal.openModal();
  }
}
