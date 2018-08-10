import { Component, Input, OnInit } from '@angular/core';
import { Directory } from '@calvillo/api';

@Component({
  selector: 'app-directory-data',
  moduleId: module.id,
  templateUrl: './directory-data.component.html',
  styleUrls: ['./directory-data.component.scss']
})
export class DirectoryDataComponent implements OnInit {
  @Input() directory: Directory;
  constructor() { }

  ngOnInit() {
  }

}
