import {
  Component,
  ElementRef, OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { finalize, switchMap } from 'rxjs/operators';
import {
  Category,
  CategoryService,
  Picture,
  PictureService
} from '@calvillo/api';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import * as _ from 'lodash';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout';
import * as SocialShare from 'nativescript-social-share';
import {screen} from 'platform';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '~/environment';
import * as app from 'tns-core-modules/application';


@Component({
  selector: 'app-picture-gallery-page',
  moduleId: module.id,
  templateUrl: './picture-gallery-page.component.html',
  styleUrls: ['./picture-gallery-page.component.scss']
})
export class PictureGalleryPageComponent implements OnInit, OnDestroy {
  @ViewChild('scrollView') scrollview: ElementRef;
  @ViewChildren('thumb') thumbsRef: QueryList<ElementRef>;

  private categoryLink: string | null;
  private loading: boolean;
  category: Category;
  private pictureLink: string | null;

  index = 0;
  pictureLength: number;
  private picture: Picture;
  private oldIndex: number;
  private currentRoute: string;
  private deviceHeight: number;

  get currentPicture(): Picture {
    if (this.category && this.category.pictures.length > this.index) {
      return this.category.pictures[this.index];
    }
  }

  constructor(private categoryService: CategoryService,
              private pictureService: PictureService,
              private pageRoute: PageRoute,
              private routerExtensions: RouterExtensions,
              private router: Router
  ) {
    this.deviceHeight = screen.mainScreen.heightDIPs;

    this.router.events.subscribe((e: NavigationEnd) => {
      this.currentRoute = e.url;
    });

    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.paramMap)
    ).subscribe(
      params => {
        if (this.categoryLink !== params.get('categoryLink')) {
          this.categoryLink = params.get('categoryLink');
          this.loadCategory();
        }

        if (this.pictureLink !== params.get('pictureLink')) {
          this.pictureLink = params.get('pictureLink');
          this.loadPicture()
        }

        console.log(this.categoryLink, this.pictureLink);
      }
    );

    app.on('orientationChanged', (dat) => {
      if (dat.newValue === 'portrait') {
        this.deviceHeight = screen.mainScreen.heightDIPs;
      } else {
        this.deviceHeight = screen.mainScreen.widthDIPs;
      }
    })
  }

  ngOnInit() {

  }

  scrollToIndex(index: number): void {
    if (!this.thumbsRef.length) {
      return;
    }
    let scrollView = <ScrollView>this.scrollview.nativeElement;

    const firstPictureRef = <FlexboxLayout>this.thumbsRef.first.nativeElement;
    const pictureRef = <FlexboxLayout>this.thumbsRef
      .find((el, currentIndex) => index === currentIndex).nativeElement;

    scrollView.scrollToHorizontalOffset(
      pictureRef.getLocationRelativeTo(firstPictureRef).x,
      true
    );
  }

  private loadCategory() {
    this.category = null;
    this.loading = true;

    this.categoryService.getByLink(this.categoryLink)
      .pipe(finalize(() => this.loading = false)).subscribe(
      category => {
        this.category = category;
        this.pictureLength = this.category.pictures.length;
        this.changeRoutePicture(0);
      }
    );
  }

  loadPicture() {
    if (!this.category) {
      return;
    }

    const index = _.findIndex(this.category.pictures, {link: this.pictureLink});
    if (!index) {
      return;
    }

    this.picture = this.category.pictures[index];
    if (this.oldIndex !== null) {
      this.oldIndex = this.index;
    }
    this.index = index;

    if (!index) {
      this.routerExtensions.navigateByUrl(this.category.routerLink);
    } else {
      this.changePicture();
    }
  }

  select(picture: Picture) {
    const index = _.findIndex(this.category.pictures, {id: picture.id});

    this.changeRoutePicture(index);
  }


  changeRoutePicture(index) {
    return this.routerExtensions.navigateByUrl(
      this.category.pictures[index].getRouterLink(this.category)
    );
  }

  selectedIndexChange($event) {
    if (this.index === $event.value) {
      return;
    }

    this.changeRoutePicture($event.value)
      .then(() => this.scrollToIndex(this.index));
  }


  changePicture() {
    this.oldIndex = this.index;
  }

  share() {
    const url = environment.webUrl + this.routerExtensions.router.url;
    console.log(url);
    SocialShare.shareUrl(url, '¡Comparte a Calvilo!');
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

  ngOnDestroy(): void {
    // @ts-ignore
    gc();
  }

}
