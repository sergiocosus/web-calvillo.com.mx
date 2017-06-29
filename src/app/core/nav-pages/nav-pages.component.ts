import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {MdDialog} from '@angular/material';
import {LoginModalComponent} from '../../auth/components/login-modal/login-modal.component';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../user/user.model';

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent implements OnInit {
  user: User;
  defaultCatId;

  constructor(private authService: AuthService,
              private dialog: MdDialog) { }

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
