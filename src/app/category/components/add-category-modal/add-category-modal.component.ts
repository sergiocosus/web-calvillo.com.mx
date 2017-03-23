import {Component, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Category} from '../../category.model';
import {ModalDirective} from 'ng2-bootstrap';
import {CategoryService} from '../../services/category.service';
import {ImageResult} from 'ng2-imageupload';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @Output() created = new EventEmitter;
  src: string = null;
  category: Category;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  open(parent_category_id: number) {
    this.category = new Category;
    this.category.category_id = parent_category_id;
    this.modal.show();
  }

  submit() {
    let cat = <any> this.category;
    cat.image = this.src ? this.src.split(',')[1] : null;
    this.categoryService.post(this.category).subscribe(
      category => {
        this.created.emit(category);
        this.modal.hide();
      }
    )
  }

  selected(imageResult: ImageResult) {
    this.src = imageResult.dataURL;
  }
}
