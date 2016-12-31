import {Component, OnInit, ElementRef, HostBinding, ViewChild, HostListener} from '@angular/core';
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
  @ViewChild('list') list: ElementRef;
  @HostListener('window:resize') resize() {
    this.initPages();
  }

  category_id = null;
  picture_id = null;

  category: Category;
  picture: Picture;

  index: number;
  pictureLength: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      route => {
        if (route['category_id'] && route['category_id'] !== this.category_id) {
          this.loadCategory(+route['category_id']);
        } else {
          this.loadCategory(252);
        }
      }
    );

    let sub = this.activatedRoute.children[0].params.subscribe(
      route => {
        if (route['picture_id']) {
          this.picture_id = +route['picture_id'];
          this.loadPicture();
        }
      }
    );
  }


  loadCategory(category_id: number) {
    this.category_id = category_id;
    this.categoryService.get(category_id).subscribe(
      category => {
        this.category = category;
        if (this.picture_id) {
          this.loadPicture();
        } else {
          if (this.category.pictures.length) {
            this.picture_id = this.category.pictures[0].id;
            this.loadPicture();
          }
        }
        this.initPages();
      }
    )
  }

  loadPicture() {
    if (!this.category) {
      return;
    }
    this.category.pictures.forEach(
      (picture, index) => {
        if (picture.id === this.picture_id) {
          this.picture = picture;
          this.index = index;
        }
      }
    )
  }

  pictureWidth = 70;
  arrows = 37;
  pages: number;
  page = 0;
  elementsByPage;


  initPages() {
    this.pictureLength = this.category.pictures.length;
    this.elementsByPage = Math.floor((this.list.nativeElement.offsetWidth - this.arrows * 2)
      / this.pictureWidth);

    this.pages = Math.ceil(
      this.pictureLength / this.elementsByPage
    );

    this.page = 0;
  }

  nextPage() {
    if (this.page + 1 >= this.pages) {
      this.page = this.pages - 1;
    } else {
      this.page++;
    }
  }

  prevPage() {
    if (this.page <= 0) {
      this.page = 0;
    } else {
      this.page--;
    }
  }

  nextPicture() {
    if (this.index + 1 >= this.pictureLength) {
      this.index = this.pictureLength - 1;
    } else {
      this.index++;
    }
    this.changePicture();
  }

  prevPicture() {
    if (this.pictureLength <= 0) {
      this.index = 0;
    } else {
      this.index--;
    }
    this.changePicture();
  }

  changePicture() {
    this.picture = this.category.pictures[this.index];
  }

  indexInPage(index) {
    if (index >= this.page * this.elementsByPage
        && index < (this.page + 1) * this.elementsByPage) {
      return true;
    } else {
      return false;
    }
  }

  get isFirstPage() {
    return this.page === 0;
  }

  get isLastPage() {
    return this.page === this.pages - 1;
  }

  get isFirstPicture() {
    return this.index === 0;
  }

  get isLastPicture() {
    return this.index === this.pictureLength - 1;
  }

}
