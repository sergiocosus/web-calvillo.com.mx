import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SelectFromMapModalComponent} from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss']
})
export class PictureFormComponent implements OnInit {
  @Input() uploading: boolean;
  @Input() picture: FormGroup;

  @Output() removed = new EventEmitter();
  @Output() coordsRequested = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
