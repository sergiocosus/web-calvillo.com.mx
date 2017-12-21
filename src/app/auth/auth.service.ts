import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import {User} from '../user/user.model';
import {LocalStorageService} from '../shared/services/local-storage.service';
import {ApiHttp} from '../shared/api-http.service';
import {UserService} from '../user/user.service';
import {environment} from '../../environments/environment';
import {Http, URLSearchParams, Headers} from '@angular/http';
import {PlatformService} from '../shared/services/platform.service';

@Injectable()
export class AuthService {

  private loggedAccountReplaySubject: ReplaySubject<User>;
  private loggedUser: User;
  private loginPath = '/dashboard';

  private path = 'auth/';
  messages = {
    sessionExpired: 'Session expired, please sign in again'
  };

  constructor(private apiHttp: ApiHttp,
              private http: Http,
              private router: Router,
              private userService: UserService,
              //private noty: NotifyService,
              private localStorage: LocalStorageService,
              private platformService: PlatformService) {
    this.loggedAccountReplaySubject = new ReplaySubject<User>(1);
  }

  login(email: string, password: string) {
    return new Observable((subscriber) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('grant_type', 'password');
      urlSearchParams.append('client_id', environment.apiClientID);
      urlSearchParams.append('client_secret', environment.apiClientSecret);
      urlSearchParams.append('username', email);
      urlSearchParams.append('password', password);
      let body = urlSearchParams.toString();

      this.http.post(environment.apiAuthUrl, body, {headers: headers}).subscribe(
        data => {
          let json = data.json();
          this.localStorage.set('access_token', json.access_token);

          this.updateLoggedUserObservable().subscribe(() => {});

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
    this.updateLoggedUserObservable({logout: true}).subscribe(() => {});
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
        if (this.platformService.isPlatformServer()) {
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
            //if (error.code === 1106 || error.code === 1107) {
            //  this.noty.alert(this.messages.sessionExpired);
            //  this.logout();
            //}
            obs.error(error);
            obs.complete();
          }
        );
      }
    });
  }
}
