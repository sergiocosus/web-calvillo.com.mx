import {Component, OnInit, Input} from '@angular/core';
import {Picture} from '../../picture.model';
import {Category} from '../../../category/category.model';

@Component({
  selector: 'app-picture-thumbnail',
  templateUrl: './picture-thumbnail.component.html',
  styleUrls: ['./picture-thumbnail.component.scss']
})
export class PictureThumbnailComponent implements OnInit {
  @Input() picture: Picture;
  @Input() category: Category;
  @Input() size = 'sm';

  constructor() { }

  ngOnInit() {
  }

}
