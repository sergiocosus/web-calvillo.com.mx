import { Component, Input, OnInit } from '@angular/core';
import { Category, Picture } from '@calvillo/api';

@Component({
  selector: 'app-picture-item',
  moduleId: module.id,
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.scss']
})
export class PictureItemComponent implements OnInit {
  @Input() picture: Picture;
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
