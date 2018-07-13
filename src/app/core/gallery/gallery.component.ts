import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CategoryService } from '@calvillo/api/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@calvillo/api/models/category.model';
import { environment } from '../../../environments/environment';
import { AuthService } from '@calvillo/api/services/auth.service';
import { User } from '@calvillo/api/models/user.model';
import { NotifyService } from '../../shared/services/notify.service';
import { SubscriptionManager } from '../../shared/classes/subscription-manager';
import { NavbarService } from '../../shared/services/navbar.service';
import { AutoUnsubscribe } from '../../shared/classes/auto-unsubscribe';
import { MatDialog } from '@angular/material';
import { SocialPostCategoryDialogComponent } from '../../category/social-post-category-dialog/social-post-category-dialog.component';
import { isPlatformBrowser } from '@angular/common';
import { AppMetaService } from '../../shared/services/app-meta.service';

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


  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private categoryService: CategoryService,
              private notify: NotifyService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private meta: AppMetaService,
              private navbarService: NavbarService,
              private dialog: MatDialog) {
  }


  ngOnInit() {
    this.subs.add = this.authService.getLoggedUser().subscribe(
      user => this.loggedUser = user
    );

    this.subs.add = this.activatedRoute.params.subscribe(
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
        this.navbarService.setTitle('Galería' + (this.category.title ? ' / ' + this.category.title : ''));
        this.updateMetaTags()
      },
      error => {
        this.notify.serviceError(error);
        this.router.navigateByUrl('../');
      }
    )
  }

  updateMetaTags() {
    this.meta.update(this.category.title,
      this.category.description.replace(/<(?:.|\n)*?>/gm, ''),
      this.category.imageUrl('xlg')
    );
  }

  postOnFacebook() {
    this.dialog.open(SocialPostCategoryDialogComponent, {data: {category: this.category}});
  }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
