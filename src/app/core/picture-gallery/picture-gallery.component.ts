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

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      route => {
        console.log(route);
      }
    );

    this.loadCategory(1);
  }

  loadCategory(category_id: number) {
    this.categoryService.get(category_id).subscribe(
      category => this.category = category
    )
  }
}
