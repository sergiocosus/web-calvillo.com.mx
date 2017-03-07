import {Component, OnInit, Input, HostBinding, HostListener} from '@angular/core';
import {Directory} from './directory.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
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

}
