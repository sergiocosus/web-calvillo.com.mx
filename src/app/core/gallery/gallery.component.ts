import {Component, OnInit, SecurityContext} from '@angular/core';
import {CategoryService} from '../../category/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category/category.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private satinizer: DomSanitizer,
              private router: Router) { }

  currRoute = '';
  category_id = null;
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

  sanitize(content){
      return this.satinizer.bypassSecurityTrustHtml(content);
  }

  loadCategory(category_id: number) {
    this.category_id = category_id;
    this.categoryService.get(category_id).subscribe(
      category => {
        this.category = category;
        console.log( this.category)
      }
    )
  }
}
