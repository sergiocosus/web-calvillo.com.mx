import {Component, OnDestroy, OnInit, SecurityContext, ViewChild} from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category/category.model';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';
import {Subscription} from 'rxjs';
import {PictureService} from '../../picture/services/picture.service';
import {NotifyService} from '../../shared/services/notify.service';
import {Picture} from '../../picture/picture.model';
import {UploadPictureModalComponent} from '../../picture/components/upload-picture-modal/upload-picture-modal.component';
import {AddCategoryModalComponent} from '../../category/components/add-category-modal/add-category-modal.component';
import {Title} from '@angular/platform-browser';

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
  subscription: Subscription;


  constructor(private categoryService: CategoryService,
              private notify: NotifyService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private title: Title) { }


  ngOnInit() {
    this.subscription = this.authService.getLoggedUser().subscribe(
      user => this.loggedUser = user
    );

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadCategory(category_id: number) {
    this.category_id = category_id;
    this.categoryService.get(category_id).subscribe(
      category => {
        this.category = category;
        this.title.setTitle(this.category.title);
      },
      error => {console.error(error);}
    )
  }
}
