import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';
import {MdDialog} from '@angular/material';
import {LoginModalComponent} from '../../auth/components/login-modal/login-modal.component';
import {Sidebar} from 'ng-sidebar';
import {NavbarService} from '../../shared/services/navbar.service';
import {SubscriptionManager} from '../../shared/classes/subscription-manager';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() sideBar: Sidebar;

  title: string;
  private user: User;
  private sub = new SubscriptionManager();

  constructor(private authService: AuthService,
              private dialog: MdDialog,
              private navbarService: NavbarService) { }

  ngOnInit() {
    this.authService.getLoggedUser().subscribe(
      user => this.user = user
    );

    this.navbarService.getTitle().subscribe(
      title => this.title = title
    )
  }

  logout() {
    this.authService.logout();
  }

  openLoginDialog() {
    this.dialog.open(LoginModalComponent);
  }


  toggleSideBar() {
    if (this.sideBar.opened) {
      this.sideBar.close();
    } else {
      this.sideBar.open();
    }
  }
}
