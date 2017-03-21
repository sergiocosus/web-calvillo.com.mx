import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getLoggedUser().subscribe(
      user => this.user = user
    );
  }

  logout() {
    this.authService.logout();
  }

}
