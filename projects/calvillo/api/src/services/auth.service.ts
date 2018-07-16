import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';
import { ApiHttp } from './api-http.service';
import { UserService } from './user.service';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { isPlatformServer } from '@angular/common';
import { CALVILLO_COM_MX_API_CONFIG, CalvilloComMxApiConfig } from '../types/api-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  messages = {
    sessionExpired: 'Session expired, please sign in again'
  };
  private loggedAccountReplaySubject: ReplaySubject<User>;
  private loggedUser: User;
  private path = 'auth/';

  constructor(@Inject(CALVILLO_COM_MX_API_CONFIG) private config: CalvilloComMxApiConfig,
              @Inject(PLATFORM_ID) private platformId: Object,
              private apiHttp: ApiHttp,
              private http: HttpClient,
              private router: Router,
              private userService: UserService,
              private localStorage: LocalStorageService) {
    this.loggedAccountReplaySubject = new ReplaySubject<User>(1);
  }

  login(email: string, password: string) {
    return new Observable((subscriber) => {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      const urlSearchParams = new HttpParams()
        .append('grant_type', 'password')
        .append('client_id', this.config.apiClientID)
        .append('client_secret', this.config.apiClientSecret)
        .append('username', email)
        .append('password', password);
      const body = urlSearchParams.toString();

      this.http.post(this.config.apiAuthUrl, body, {headers: headers}).subscribe(
        data => {
          const json = (data as any).json();
          this.localStorage.set('access_token', json.access_token);

          this.updateLoggedUserObservable().subscribe(() => {
          });

          // this.router.navigate(['/myaccount', {'first-login': true}]);

          subscriber.next(data);
          subscriber.complete();
        },
        error => {
          //    this.noty.serviceError(error);
          subscriber.error(error);
        }
      );


    });
  }

  logout() {
    this.localStorage.remove('access_token');
    this.updateLoggedUserObservable({logout: true}).subscribe(() => {
    });
  }

  getLoggedUser() {
    return this.loggedAccountReplaySubject;
  }

  updateLoggedUserObservable(data = {logout: false}) {
    return new Observable<User>((obs) => {
      if (data.logout) {
        this.loggedUser = null;
        this.loggedAccountReplaySubject.next(this.loggedUser);
      } else {
        if (isPlatformServer(this.platformId)) {
          return;
        }

        this.userService.getMe().subscribe(
          user => {
            this.loggedUser = user;
            this.loggedAccountReplaySubject.next(this.loggedUser);

            if (data.logout) {
              this.router.navigateByUrl('/');
            }

            obs.next(user);
            obs.complete();
          },
          error => {
            console.error(error);
            // Token expired
            // if (error.code === 1106 || error.code === 1107) {
            //  this.noty.alert(this.messages.sessionExpired);
            //  this.logout();
            // }
            obs.error(error);
            obs.complete();
          }
        );
      }
    });
  }
}
