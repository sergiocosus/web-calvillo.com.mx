import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Picture} from '../picture.model';
import {Observable} from 'rxjs';

@Injectable()
export class PictureService {

  constructor(private apiHttp: ApiHttp) { }

  post(data) {
    return this.apiHttp.post('picture', data)
      .map(json => new Picture().parse(json.picture));
  }
}
