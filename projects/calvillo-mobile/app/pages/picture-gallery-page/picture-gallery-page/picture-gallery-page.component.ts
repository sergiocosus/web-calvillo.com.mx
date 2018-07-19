import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import {
  Category,
  CategoryService,
  Picture,
  PictureService
} from '@calvillo/api';
import {
  SwipeDirection,
  SwipeGestureEventData
} from 'tns-core-modules/ui/gestures';


@Component({
  selector: 'app-picture-gallery-page',
  moduleId: module.id,
  templateUrl: './p.html',
  styleUrls: ['./picture-gallery-page.component.scss']
})
export class PictureGalleryPageComponent implements OnInit {
  private categoryLink: string | null;
  private loading: boolean;
  category: Category;
  private pictureLink: string | null;
  picture1: Picture;
  picture2: Picture;
  index = 0;
  pictureLength: number;

  constructor(private categoryService: CategoryService,
              private pictureService: PictureService,
              private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(
      params => {
        this.categoryLink = params.get('categoryLink');
        this.pictureLink = params.get('pictureLink');

        console.log(this.categoryLink, this.pictureLink);
        this.loading = true;
        this.category = null;
        this.categoryService.getByLink(this.categoryLink)
          .pipe(finalize(() => this.loading = false)).subscribe(
          category => {
            this.category = category;
            this.pictureLength = this.category.pictures.length;
            this.changeRoutePicture(0);
          }
        );
      }
    )

  }

  select(picture: Picture) {
    console.log('selected picture');
    if (this.picture1) {
      this.picture2 = picture;
      this.picture1 = null;
    } else  {
      this.picture1 = picture;
      this.picture2 = null;
    }
  }
  onSwipe(event: SwipeGestureEventData) {
    console.log(event);

    if (event.direction === SwipeDirection.left) {
      this.prevPicture();
    }
    if (event.direction === SwipeDirection.right) {
      this.nextPicture();
    }
  }

  ngOnInit() {
    console.log('selected picture');
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


  changeRoutePicture(index) {
    console.log(index);
    this.select(this.category.pictures[index]);
  }


}
