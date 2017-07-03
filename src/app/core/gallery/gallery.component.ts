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
import {AutoUnsubscribe} from '../../shared/classes/auto-unsubscribe';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
@AutoUnsubscribe()
export class GalleryComponent implements OnInit {
  category: Category;
  currRoute = '';
  category_link = null;
  adSenseEnabled = environment.adSenseEnabled;
  loggedUser: User;
  subs = new SubscriptionManager();


  constructor(private categoryService: CategoryService,
              private notify: NotifyService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private title: Title,
              private navbarService: NavbarService) { }


  ngOnInit() {
    this.subs.add = this.authService.getLoggedUser().subscribe(
      user => this.loggedUser = user
    );

    this.subs.add = this.activatedRoute.children[0].params.subscribe(
      route => {
        this.currRoute = this.router.url;
        if (route['category_link']) {
          this.loadCategory(route['category_link']);
        } else {
          this.loadCategory(environment.defaultCategoryId);
        }
      }
    );
  }

  loadCategory(category_link: string) {
    this.category_link = category_link;
    this.categoryService.getByLink(category_link).subscribe(
      category => {
        this.category = category;
        this.title.setTitle(this.category.title);
        this.navbarService.setTitle('Galería' + (this.category.title ? ' / ' + this.category.title: ''));
      },
      error => {
        this.notify.serviceError(error);
        this.router.navigateByUrl('../');
      }
    )
  }
}
