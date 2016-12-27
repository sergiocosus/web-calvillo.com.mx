import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category/category.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../category/category.model';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss']
})
export class PictureGalleryComponent implements OnInit {
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  category_id = null;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      route => {
        if (route['category_id']) {
          this.loadCategory(route['category_id']);
        } else {
          this.loadCategory(252);
        }
      }
    );

  }

  loadCategory(category_id: number) {
    this.category_id = category_id;
    this.categoryService.get(category_id).subscribe(
      category => this.category = category
    )
  }
}
