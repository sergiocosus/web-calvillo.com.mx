import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService,
              private router: Router) {
    this.authService.updateLoggedUserObservable().subscribe(() => {});

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      document.body.scrollTop = 0;
    });
  }

  ngOnInit(): void {

  }

}
