import { Component, OnInit } from '@angular/core';
import { Category, CategoryService, Directory, Picture } from '@calvillo/api';
import { finalize, switchMap } from 'rxjs/operators';
import { PageRoute } from 'nativescript-angular/router';
import { ScrollEventData, ScrollView } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';

@Component({
  selector: 'app-gallery-page',
  moduleId: module.id,
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  categoryLink: string;
  category: Category;

  loading = true;
  categoryImageLoading: boolean;
  results: (Directory | Category | Picture)[];

  constructor(private categoryService: CategoryService,
              private pageRoute: PageRoute,
              ) {
    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.paramMap)
    ).subscribe(
      params => {
        this.categoryLink = params.get('categoryLink');
        console.log(this.categoryLink);
        this.loading = true;
        this.category = null;

        this.categoryService.getByLink(this.categoryLink)
          .pipe(finalize(() => this.loading = false)).subscribe(
          category => {
            this.category = category;
            this.results = [...category.directories, ...category.categories, ...category.pictures];
            this.categoryImageLoading = true;
          }
        );
      }
    )

  }

  ngOnInit() {
  }

  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    console.log('hooliii');
    // If the header content is still visiible
    if (scrollView.verticalOffset < 250) {
      const offset = scrollView.verticalOffset / 2;
      if (scrollView.ios) {
        // iOS adjust the position with an animation to create a smother scrolling effect.
        topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
      } else {
        // Android, animations are jerky so instead just adjust the position without animation.
        topView.translateY = Math.floor(offset);
      }
    }
  }

  getType(result: (Picture | Directory | Category)) {
    if (result instanceof Picture) {
      return 'picture';
    } else if (result instanceof  Directory) {
      return 'directory';
    } else {
      return 'category';
    }
  }
}
