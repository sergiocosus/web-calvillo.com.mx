import {Component, OnDestroy, OnInit, SecurityContext, ViewChild} from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category/category.model';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';
import {NotifyService} from '../../shared/services/notify.service';
import {Title} from '@angular/platform-browser';
import {SubscriptionManager} from '../../shared/classes/subscription-manager';
import {NavbarService} from '../../shared/services/navbar.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  category: Category;
  currRoute = '';
  category_id = null;
  adSenseEnabled = environment.adSenseEnabled;
  loggedUser: User;
  sub = new SubscriptionManager();


  constructor(private categoryService: CategoryService,
              private notify: NotifyService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private title: Title,
              private navbarService: NavbarService) { }


  ngOnInit() {
    const sub = this.authService.getLoggedUser().subscribe(
      user => this.loggedUser = user
    );

    const subCategory = this.activatedRoute.children[0].params.subscribe(
      route => {
        this.currRoute = this.router.url;
        if (route['category_id']) {
          this.loadCategory(route['category_id']);
        } else {
          this.loadCategory(environment.defaultCategoryId);
        }
      }
    );

    this.sub.push(sub);
    this.sub.push(subCategory);
  }

  ngOnDestroy(): void {
    this.sub.clear();
  }

  loadCategory(category_id: number) {
    this.category_id = category_id;
    this.categoryService.get(category_id).subscribe(
      category => {
        this.category = category;
        this.title.setTitle(this.category.title);
        this.navbarService.setTitle('Galería' + (this.category.title ? ' / ' + this.category.title: ''));
      },
      error => {console.error(error);}
    )
  }
}
