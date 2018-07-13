import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@calvillo/api/services/auth.service';
import { User } from '@calvillo/api/models/user.model';
import { MatDialog, MatSidenav } from '@angular/material';
import { LoginModalComponent } from '../../auth/components/login-modal/login-modal.component';
import { NavbarService } from '../../shared/services/navbar.service';
import { SubscriptionManager } from '../../shared/classes/subscription-manager';
import { AutoUnsubscribe } from '../../shared/classes/auto-unsubscribe';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
@AutoUnsubscribe()
export class NavBarComponent implements OnInit {
  @Input() sideBar: MatSidenav;

  title: string;
  hiddenSearch: boolean;
  private user: User;
  private subs = new SubscriptionManager();

  constructor(private authService: AuthService,
              private dialog: MatDialog,
              private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.subs.add = this.authService.getLoggedUser().subscribe(
      user => this.user = user
    );

    this.subs.add = this.navbarService.getTitle().subscribe(
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
