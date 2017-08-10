import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Picture} from '../picture.model';

@Injectable()
export class PictureService {
  basePath = 'picture/';
  constructor(private apiHttp: ApiHttp) { }

  post(data) {
    return this.apiHttp.post(this.basePath, data)
      .map(json => new Picture().parse(json.picture));
  }

  facebookPost(category_id, picture_id, data) {
    return this.apiHttp.post(`${this.basePath}${picture_id}/facebook/${category_id} `, data)
  }

  put(data) {
    return this.apiHttp.put(this.basePath + data.id , data)
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
    return this.apiHttp.get(this.basePath + 'link-exists', {link:link});
  }
}
