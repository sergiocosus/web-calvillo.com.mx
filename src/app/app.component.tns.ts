import {Component, OnInit, ViewChild} from '@angular/core';
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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  @ViewChild(ListViewComponent) listView: ListViewComponent;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  public tvtext = "kjkjkjkj";
  oneway = 'calvillo.com.mx';
  category: Category;
  private _mainContentText: string;

  constructor(
    private categoryService: CategoryService,
              private router: Router,
     //         private googleAnalytics: GoogleAnalyticsService,
      //        private scriptService: ScriptService
    ) {
    //this.authService.updateLoggedUserObservable().subscribe(() => {});
/*
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      document.body.scrollTop = 0;
    });
*/
    this.emitPageViews();
  }

  emitPageViews() {
    /*this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalytics.pageView(event.urlAfterRedirects);
      }
    });
    */
  }

  ngOnInit(): void {
    this.loadCategory('principal');

    if (isAndroid) {
      this.subscribeBackButton();
    }
    this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";

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
    this.categoryService.getByLink(link).subscribe(
      category => {
        this.category = category;
        this.listView.nativeElement.refresh();
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

