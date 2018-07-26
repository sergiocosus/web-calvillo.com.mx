import { Component, Input, OnInit } from '@angular/core';
import { Category } from '@calvillo/api';

@Component({
  selector: 'app-category',
  moduleId: module.id,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
