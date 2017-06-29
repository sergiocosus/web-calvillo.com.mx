import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';
import {MdDialog} from '@angular/material';
import {LoginModalComponent} from '../../auth/components/login-modal/login-modal.component';
import {Sidebar} from 'ng-sidebar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() sideBar: Sidebar;

  private user: User;


  constructor(private authService: AuthService,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.authService.getLoggedUser().subscribe(
      user => this.user = user
    );
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
