import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CategoryService} from '../../../category/services/category.service';
import {Category} from '../../../category/category.model';
import {AutoUnsubscribe} from '../../../shared/classes/auto-unsubscribe';
import {SubscriptionManager} from '../../../shared/classes/subscription-manager';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss'],
})
@AutoUnsubscribe()
export class PictureFormComponent implements OnInit {
  @Input() uploading: boolean;
  @Input() picture: FormGroup;

  @Output() coordsRequested = new EventEmitter();
  categories: Category[];
  subs = new SubscriptionManager();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => this.categories = categories
    );
  }
}
