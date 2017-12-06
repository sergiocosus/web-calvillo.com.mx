import {
  Component, OnInit, ElementRef, ViewChild, HostListener, trigger, state,
  transition, style, animate, PLATFORM_ID, Inject
} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CategoryService} from '../../../category/services/category.service';
import {Category} from '../../../category/category.model';
import {Picture} from '../../../picture/picture.model';
import {ResolutionService} from '../../../shared/services/resolution.service';
import {isPlatformBrowser} from '@angular/common';
import {MatDialog} from '@angular/material';
import {PlaceOnMapModalComponent} from '../../../maps/components/place-on-map-modal/place-on-map-modal.component';
import {SubscriptionManager} from '../../../shared/classes/subscription-manager';
import {Meta, Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {AutoUnsubscribe} from '../../../shared/classes/auto-unsubscribe';
import {SocialPostDialogComponent} from '../../../picture/components/social-post-dialog/social-post-dialog.component';

declare var window: any;

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
@AutoUnsubscribe()
export class PictureGalleryComponent implements OnInit {
  @ViewChild('list') list: ElementRef;

  @HostListener('window:resize') resize() {
    this.initImgSize();
    this.initPages();
  }

  @HostListener('window:keydown', ['$event']) onKeyDown(event: any) {
    switch (event.code) {
      case 'ArrowRight':
        this.nextPicture();
        break;
      case 'ArrowLeft':
        this.prevPicture();
        break;
    }
  }
  adSenseEnabled = environment.adSenseEnabled;

  imgSize = null;

  category_link = null;
  picture_link = null;

  category: Category;
  pictureTail: {picture: Picture, state: string}[] = [];
  picture: Picture;

  index: number;
  oldIndex: number = null;
  pictureLength: number;

  pictureWidth = 70;
  arrows = 37;
  pages: number;
  page = 0;
  elementsByPage;

  currentRoute: string;

  private sub = new SubscriptionManager;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private resolutionService: ResolutionService,
              private dialog: MatDialog,
              private title: Title,
              private meta: Meta) {
    this.sub.add = this.router.events.subscribe((e: NavigationEnd) => {
      this.currentRoute = 'http://calvillo.com.mx' + e.url;
      console.log(this.currentRoute);
    });
  }

  ngOnInit() {
    this.initImgSize();
    this.sub.add = this.activatedRoute.params.subscribe(
      route => {
        if (route['category_link'] && route['category_link'] !== this.category_link) {
          this.loadCategory(route['category_link']);
        } else {
          this.loadCategory(environment.defaultCategoryId);
        }
      }
    );

    this.sub.add = this.activatedRoute.children[0].params.subscribe(
      route => {
        if (route['picture_link']) {
          this.picture_link = route['picture_link'];
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

    switch (resolutionSize) {
      case 'xs':
      case 'sm':
        this.pictureWidth = 45;
        this.arrows = 37;
        break;
      case 'md':
      case 'xl':
      case 'lg':
      default:
        this.pictureWidth = 70;
        this.arrows = 37;
    }

  }

  onSwipeLeft(event: any) {
    this.nextPicture();
  }

  onSwipeRight(event: any) {
    this.prevPicture();
  }


  preloadImage(src) {
    if (isPlatformBrowser(this.platformId)) {
      let image = new Image();
      image.src = src;
    }
  }

  loadCategory(category_link: string) {
    this.category_link = category_link;
    this.categoryService.getByLink(category_link).subscribe(
      category => {
        this.category = category;

        if (this.picture_link) {
          this.loadPicture();
        } else {
          if (this.category.pictures.length) {
            this.picture_link = this.category.pictures[0].link;
            this.loadPicture();
          }
        }
        this.initPages();
      },
      error => {
        this.router.navigateByUrl('galeria');
      }
    )
  }

  loadPicture() {
    if (!this.category) {
      return;
    }
    let found = false;
    this.category.pictures.forEach(
      (picture, index) => {
        if (picture.link === this.picture_link) {
          found = true;
          this.picture = picture;
          this.title.setTitle(this.category.title + " - " + this.picture.title);
          this.updateMetaTags();
          if (this.oldIndex !== null) {
            this.oldIndex = this.index;
          }
          this.index = index;
        }
      }
    );

    if (!found) {
      this.router.navigateByUrl(this.category.routerLink);
    } else {
      this.changePicture();
    }
  }


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
    this.router.navigateByUrl(this.category.pictures[index].getRouterLink(this.category));
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
    this.page = this.pageOfIndex(this.index);

    if (this.index < this.category.pictures.length - 1) {
      this.preloadImage(this.category.pictures[this.index + 1].imageUrl(this.imgSize));
    }
  }

  pageOfIndex(index) {
    return Math.floor(index / this.elementsByPage);
  }

  indexInPage(index) {
    return this.pageOfIndex(index) == this.page;
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
    const dialog = this.dialog.open(PlaceOnMapModalComponent);
    dialog.componentInstance.setData(
      this.picture.longitude,
      this.picture.latitude,
      this.picture.title
    );
  }

  postOnFacebook() {
    const dialog = this.dialog.open(SocialPostDialogComponent);
    dialog.componentInstance.init(this.category, this.picture);

  }

  updateMetaTags() {
    this.meta.updateTag({
      property: 'og:image',
      content: this.picture.imageUrl('xlg')
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.picture.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.picture.description.replace(/<(?:.|\n)*?>/gm, ''),
    });

    this.meta.updateTag({
      name: 'description',
      content: this.picture.description.replace(/<(?:.|\n)*?>/gm, ''),
    });
  }
}
