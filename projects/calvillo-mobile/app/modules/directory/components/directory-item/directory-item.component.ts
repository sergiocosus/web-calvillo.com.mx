import { Component, Input, OnInit } from '@angular/core';
import { Category, Directory } from '@calvillo/api';

@Component({
  selector: 'app-directory-item',
  moduleId: module.id,
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {
  @Input() category: Category;
  @Input() directory: Directory;
  constructor() { }

  ngOnInit() {
  }

}
