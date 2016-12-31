import {Component, OnInit, Input} from '@angular/core';
import {Category} from '../../category.model';

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.scss']
})
export class CategoryThumbnailComponent implements OnInit {
  @Input() category: Category;
  @Input() size = 'sm';

  constructor() { }

  ngOnInit() {
  }

}
