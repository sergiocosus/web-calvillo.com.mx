import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiHttp } from './api-http.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiHttp: ApiHttp) {

  }

  getMe() {
    return this.apiHttp.get('user/me').pipe(
      map(json => new User().parse(json.user)));
  }

  postFacebookLogin(accessToken: string) {
    return this.apiHttp.post('user/me/facebook-login', {access_token: accessToken});
  }

  getStatus() {
    return this.apiHttp.get('user/me/facebook-status');
  }
}
