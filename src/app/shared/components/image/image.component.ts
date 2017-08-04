import {Component, Input, OnInit} from '@angular/core';
import {ImageableModel} from '../../classes/imageable.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() model: ImageableModel;
  @Input() size = 'xs';
  constructor() { }

  ngOnInit() {
  }

}
