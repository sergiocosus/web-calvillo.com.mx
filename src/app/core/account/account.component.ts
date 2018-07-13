import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { environment } from '../../../environments/environment';
import { AuthService, UserService } from '@calvillo/api';
import { NotifyService } from '../../shared/services/notify.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private fb: FacebookService,
              private userService: UserService,
              private authService: AuthService,
              private notify: NotifyService) {

    let initParams: InitParams = {
      appId: environment.facebookAppId,
      xfbml: true,
      version: 'v2.9',
    };

    fb.init(initParams);
  }

  ngOnInit() {

  }


  facebookLogin() {
    this.fb.login({
      scope: 'manage_pages, publish_pages'
    }).then(loginResponse => {
      this.userService.postFacebookLogin(loginResponse.authResponse.accessToken).subscribe(
        success => {
          this.notify.success('Cuenta conectada con éxito');
        }
      );
    });
  }


  logout() {
    this.authService.logout();
  }

}
