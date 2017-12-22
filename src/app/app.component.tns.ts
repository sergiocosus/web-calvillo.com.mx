import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from './category/services/category.service';
import {Category} from './category/category.model';
import {
  ListViewComponent,
  SetupItemViewArgs
} from 'nativescript-angular/directives/list-view-comp';


import * as application from "application";
import { isAndroid } from "platform";
import {
  AndroidActivityBackPressedEventData,
  AndroidApplication
} from 'tns-core-modules/application/application';
import {RadSideDrawerComponent} from 'nativescript-telerik-ui/sidedrawer/angular';
import {RadSideDrawer} from 'nativescript-telerik-ui/sidedrawer';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
})
export class AppComponent implements OnInit{
  @ViewChild(ListViewComponent) listView: ListViewComponent;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  public tvtext = "kj      k jkj kj";
  oneway = 'calvillo.com.mx';
  category: Category;
  private _mainContentText: string;

  constructor(
    private categoryService: CategoryService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.loadCategory('principal');

    if (isAndroid) {
      this.subscribeBackButton();
    }
  }


  getTitle() {
    if (this.category) {
      return this.category.title;
    } else {
      return '';
    }
  }

  subscribeBackButton() {
    application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
      if (this.category && this.category.category) {
        console.log(this.category.category.link);
        this.loadCategory(this.category.category.link);
        data.cancel = true;
      }
    });
  }

  loadCategory(link: string) {
      console.log(link);

      this.categoryService.getByLink(link).subscribe(
      category => {
        console.log(category);
        this.category = category;
        this.listView.nativeElement.refresh();
        this.changeDetectorRef.detectChanges();
      }
    )
  }

  public onItemTap(args: SetupItemViewArgs) {
    this.loadCategory(this.category.categories[args.index].link);
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }


  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
    this._mainContentText = value;
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }
}

