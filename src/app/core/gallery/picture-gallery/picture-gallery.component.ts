import {
  Component, OnInit, ElementRef, HostBinding, ViewChild, HostListener, trigger, state,
  transition, style, animate
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../category/services/category.service';
import {Category} from '../../../category/category.model';
import {Picture} from '../../../picture/picture.model';
import {isBrowser} from 'angular2-universal';
import {ResolutionService} from '../../../shared/services/resolution.service';
import {ModalDirective} from 'ng2-bootstrap';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss'],
  animations: [
    trigger('picture', [
      transition('void => activeLeft', [
        style({
          transform: 'translateX(-100%) scale(1)',
        }),
        animate('500ms ease-out', style({
          transform: 'translateX(0) scale(1)'
        }))
      ]),
      transition('void => activeRight', [
        style({
          transform: 'translateX(100%) scale(1)'
        }),
        animate('500ms ease-out', style({
          transform: 'translateX(0) scale(1)'
        }))
      ]),
      transition('void => active', [
        style({
          transform: 'scale(.5)',
          opacity: 0
        }),
        animate('500ms ease-out', style({
          transform: 'scale(1)',
          opacity: 1
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
  ]
})
export class PictureGalleryComponent implements OnInit {
  @ViewChild('list') list: ElementRef;
  @ViewChild('modal') modal: ModalDirective;

  @HostListener('window:resize') resize() {
    this.initImgSize();
    this.initPages();
  }

  @HostListener('window:keydown', ['$event']) onKeydonw(event: any) {
    switch (event.code) {
      case 'ArrowRight':
        this.nextPicture();
        break;
      case 'ArrowLeft':
        this.prevPicture();
        break;
    }
  }

  imgSize = null;

  category_id = null;
  picture_id = null;

  category: Category;
  pictureTail: {picture: Picture, state: string}[] = [];
  picture: Picture;

  index: number;
  oldIndex: number = null;
  pictureLength: number;
  hiddenMap = true;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private resolutionService: ResolutionService) { }

  ngOnInit() {
    this.initImgSize();
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

  initImgSize() {
    let resolutionSize = this.resolutionService.getSize();

    switch (resolutionSize) {
      case 'xs':
        this.imgSize = 'md';
        break;
      case 'sm':
      case 'md':
        this.imgSize = 'lg';
        break;
      case 'xl':
      case 'lg':
        this.imgSize = 'xlg';
        break;
      default:
        this.imgSize = 'xs';
    }
  }

  onSwipeLeft(event: any) {
    this.nextPicture();
  }

  onSwipeRight(event: any) {
    this.prevPicture();
  }


  preloadImage(src) {
    if (isBrowser) {
      let image = new Image();
      image.src = src;
      // console.log(src);
    }
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
          if (this.oldIndex !== null) {
            this.oldIndex = this.index;
          }
          this.index = index;
        }
      }
    );

    this.changePicture();
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
      this.changeRoutePicture(this.pictureLength - 1);
    } else {
      this.changeRoutePicture(this.index + 1);
    }
  }

  prevPicture() {
    if (this.index <= 0) {
      this.changeRoutePicture(0);
    } else {
      this.changeRoutePicture(this.index - 1);
    }
  }

  changeRoutePicture(index:number) {
    // console.log(index);
    this.router.navigate(['galeria', this.category_id, 'foto', this.category.pictures[index].id]);
  }

  changePicture() {
    let state = 'active';
    if (this.oldIndex !== null) {
      state = (this.index > this.oldIndex) ? 'activeRight' : 'activeLeft'
    }

    this.pictureTail.push({
      picture: this.picture,
      state: state
    });

    if (this.pictureTail.length >= 2) {
      this.pictureTail.shift();
    }

    this.oldIndex = this.index;

    if (this.index < this.category.pictures.length - 1) {
      this.preloadImage(this.category.pictures[this.index + 1].imageUrl(this.imgSize));
    }
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

  openMapModal() {
    this.modal.show();
    setTimeout(() => this.hiddenMap = false, 200);
  }

}
