import {Component, Input, OnInit} from '@angular/core';
import {ImageableModel} from '../../classes/imageable.model';
import {ImageSize} from '../../classes/image-size';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() model: ImageableModel;
  @Input() size: ImageSize = 'xs';
  constructor() { }

  ngOnInit() {
  }

}
