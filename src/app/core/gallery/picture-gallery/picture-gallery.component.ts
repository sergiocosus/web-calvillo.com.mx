import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../category/category.service';
import {Category} from '../../../category/category.model';
import {Picture} from '../../../picture/picture.model';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss']
})
export class PictureGalleryComponent implements OnInit {
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  category_id = null;
  picture_id = null;

  category: Category;
  picture: Picture;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      route => {
        if (route['picture_id']) {
          this.picture_id = +route['picture_id'];
        }
        if (route['category_id']) {
          this.loadCategory(+route['category_id']);
        } else {
          this.loadCategory(252);
        }
      }
    );
  }

  loadCategory(category_id: number) {
    this.category_id = category_id;
    this.categoryService.get(category_id).subscribe(
      category => {
        this.category = category;
        this.category.pictures.forEach(
          picture => {
            console.log(picture.id, this.picture_id);
            if (picture.id === this.picture_id) {
              this.picture = picture;
            }
          }
        )
      }
    )
  }

  loadPicture(picture_id: number) {
    this.picture_id = picture_id;
   /* this.categoryService.get(picture_id).subscribe(
      picture => this.picture = picture
    )*/
  }

}
