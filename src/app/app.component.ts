import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from './shared/services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService,
              private router: Router,
              private googleAnalytics: GoogleAnalyticsService) {
    this.authService.updateLoggedUserObservable().subscribe(() => {});

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      document.body.scrollTop = 0;
    });

    this.emitPageViews();
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
