import {Component, OnDestroy, OnInit, SecurityContext} from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category/category.model';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';
import {Subscription} from 'rxjs';
import {PictureService} from '../../picture/services/picture.service';
import {NotifyService} from '../../shared/services/notify.service';

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
              private pictureService: PictureService,
              private notify: NotifyService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


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
      },
      error => {console.error(error);}
    )
  }

  pushCategory(category) {
    this.category.categories.push(category);
  }

  pushPicture(picture) {
    this.category.pictures.push(picture);
  }

  removePicture(picture) {
    this.pictureService.remove(picture.id).subscribe(
      deletedPicture => {
        this.notify.success('Fotografía borrada');
        this.category.pictures.splice(
          this.category.pictures.indexOf(picture), 1
        );
        this.category.deleted_pictures.push(deletedPicture);
      }
    );
  }

  deletePicture(picture) {
    this.pictureService.delete(picture.id).subscribe(
      () => {
        this.notify.success('Fotografía borrada permanentemente');
        this.category.deleted_pictures.splice(
          this.category.deleted_pictures.indexOf(picture), 1
        );
      }
    );
  }

  restorePicture(picture) {
    this.pictureService.restore(picture.id).subscribe(
      restoredPicture => {
        this.notify.success('Fotografía restaurada');
        this.category.deleted_pictures.splice(
          this.category.deleted_pictures.indexOf(picture), 1
        );
        this.category.pictures.push(restoredPicture);
      }
    );
  }
}
