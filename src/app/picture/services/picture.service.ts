import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Picture} from '../picture.model';
import {Observable} from 'rxjs';

@Injectable()
export class PictureService {
  basePath = 'picture/';
  constructor(private apiHttp: ApiHttp) { }

  post(data) {
    return this.apiHttp.post(this.basePath, data)
      .map(json => new Picture().parse(json.picture));
  }

  remove(picture_id: number) {
    return this.apiHttp.delete(this.basePath + picture_id)
      .map(json => new Picture().parse(json.picture));
  }

  delete(picture_id: number) {
    return this.apiHttp.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.apiHttp.patch(this.basePath + picture_id)
      .map(json => new Picture().parse(json.picture));
  }

  getLinkExists(link) {
    return this.apiHttp.get(this.basePath + '/link-exists', {link:link});
  }
}
