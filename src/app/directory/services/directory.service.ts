import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Directory} from '../directory.model';
import {Category} from "../../category/category.model";

@Injectable()
export class DirectoryService {
  basePath = 'directory/';

  constructor(private apiHttp: ApiHttp) { }

  get(data?) {
    return this.apiHttp.get(this.basePath , data)
      .map(json => Directory.parseArray(json.directories));
  }

  getByLink(link: string) {
    return this.apiHttp.get(this.basePath + 'link/' + link)
        .map(json => new Directory().parse(json.directory));
  }


  post(data) {
    return this.apiHttp.post(this.basePath , data)
      .map(json => new Directory().parse(json.directory));
  }

  put(data) {
    return this.apiHttp.put(this.basePath + data.id , data)
      .map(json => new Directory().parse(json.directory));
  }

  remove(picture_id: number) {
    return this.apiHttp.delete(this.basePath + picture_id)
      .map(json => new Directory().parse(json.directory));
  }

  delete(picture_id: number) {
    return this.apiHttp.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.apiHttp.patch(this.basePath + picture_id)
      .map(json => new Directory().parse(json.directory));
  }
}
