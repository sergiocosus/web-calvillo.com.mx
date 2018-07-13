import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from '../../../modules/api/models/category.model';
import { AutoUnsubscribe } from '../../../shared/classes/auto-unsubscribe';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss'],
})
@AutoUnsubscribe()
export class PictureFormComponent implements OnInit {
  @Input() uploading: boolean;
  @Input() picture: FormGroup;
  @Input() categories: Category[];
  showCategories = false;

  @Output() coordsRequested = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
