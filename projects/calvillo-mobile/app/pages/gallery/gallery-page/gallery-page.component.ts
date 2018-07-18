import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@calvillo/api';
import { finalize, switchMap } from 'rxjs/operators';
import { PageRoute } from 'nativescript-angular/router';

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

  constructor(private categoryService: CategoryService,
              private pageRoute: PageRoute,
              ) {
    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.paramMap)
    ).subscribe(
      params => {
        this.categoryLink = params.get('categoryLink');
        this.loading = true;
        this.category = null;

        this.categoryService.getByLink(this.categoryLink)
          .pipe(finalize(() => this.loading = false)).subscribe(
          category => this.category = category
        );
      }
    )

  }

  ngOnInit() {
  }

}
