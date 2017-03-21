import {Component, OnInit, SecurityContext} from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category/category.model';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  category: Category;
  currRoute = '';
  category_id = null;
  adSenseEnabled = environment.adSenseEnabled;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router: Router) { }


  ngOnInit() {
    let sub = this.activatedRoute.children[0].params.subscribe(
      route => {
        this.currRoute = this.router.url;
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
      category => {
        this.category = category;
      },
      error => {console.error(error);}
    )
  }
}
