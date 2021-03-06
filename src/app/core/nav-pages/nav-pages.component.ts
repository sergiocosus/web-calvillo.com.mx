import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from '../../auth/components/login-modal/login-modal.component';
import { AuthService, User } from '@calvillo/api';

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent implements OnInit {
  user: User;
  defaultCatId;
  hiddenSearch: boolean;

  constructor(private authService: AuthService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.defaultCatId = environment.defaultCategoryId;
    this.authService.getLoggedUser().subscribe(
      user => this.user = user
    );
  }

  openLoginDialog() {
    this.dialog.open(LoginModalComponent);
  }
}
