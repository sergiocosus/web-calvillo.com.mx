
import {filter} from 'rxjs/operators';
import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from './shared/services/google-analytics.service';
import {ScriptService} from './shared/services/script.service';
import {PlatformService} from './shared/services/platform.service';
import {Meta} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {PageScrollConfig, PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService,
              private router: Router,
              private googleAnalytics: GoogleAnalyticsService,
              private scriptService: ScriptService,
              private platformService: PlatformService,
              private meta: Meta,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    this.authService.updateLoggedUserObservable().subscribe(() => {});

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      if (this.platformService.isPlatformBrowser()){
        this.goToTop();

        document.body.scrollTop = 0;
      }
    });
    if (this.platformService.isPlatformServer()) {
      console.log('--Request--');
      this.router.events.subscribe((e: NavigationEnd) => {
        console.log(e.url);
      });
    }



    this.emitPageViews();

    this.meta.updateTag({
      property: 'fb:app_id',
      content:  environment.facebookAppId,
    });


    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
    PageScrollConfig.defaultDuration = 500;

  }

  emitPageViews() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalytics.pageView(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {

  }

  goToTop(){
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, 'body');
    setTimeout(() => this.pageScrollService.start(pageScrollInstance), 100)

  };

}
