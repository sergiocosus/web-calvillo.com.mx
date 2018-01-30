import {
  Component, OnInit, Input, HostBinding, HostListener, ChangeDetectionStrategy
} from '@angular/core';
import {Directory} from './directory.model';
import {Category} from '../category/category.model';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  animations: [
    trigger('directory', [
      transition('void => active', [
        style({
          transform: 'scale(.5)',
          opacity: 0,
          height: 0,
        }),
        animate('500ms ease-out', style({
          transform: 'scale(1)',
          opacity: 1,
          height: '*',
        }))
      ]),
      transition('* => void', [
        animate('500ms ease-out', style({
          opacity: 0,
          zIndex: 0,
          transform: 'scale(.5)',
        }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectoryComponent implements OnInit {
  @HostBinding('class.expanded') expanded = false;
  /*@HostListener('click') clicked () {
    this.show();
  }*/

  @Input() category: Category;
  @Input() directory: Directory;
  @Input() showMap = true;
  @Input() set showExpanded (value) {
     this.expanded = value;
  } get data() {
    return this.expanded;
}

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.expanded = true;
  }

}
