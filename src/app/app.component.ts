import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from './shared/services/google-analytics.service';
import {ScriptService} from './shared/services/script.service';
import {PlatformService} from './shared/services/platform.service';
import {Meta} from '@angular/platform-browser';
import {environment} from '../environments/environment';

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
              private meta: Meta) {
    this.authService.updateLoggedUserObservable().subscribe(() => {});

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      if (this.platformService.isPlatformBrowser()){
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

}
