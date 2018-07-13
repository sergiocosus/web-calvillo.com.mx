import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiHttp } from './api-http.service';
import { Directory } from '../models/directory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  basePath = 'directory/';

  constructor(private apiHttp: ApiHttp) {
  }

  get(data?) {
    return this.apiHttp.get(this.basePath, data).pipe(
      map(json => Directory.parseArray(json.directories)));
  }

  getByLink(link: string) {
    return this.apiHttp.get(this.basePath + 'link/' + link).pipe(
      map(json => new Directory().parse(json.directory)));
  }


  post(data) {
    return this.apiHttp.post(this.basePath, data).pipe(
      map(json => new Directory().parse(json.directory)));
  }

  put(data) {
    return this.apiHttp.put(this.basePath + data.id, data).pipe(
      map(json => new Directory().parse(json.directory)));
  }

  remove(picture_id: number) {
    return this.apiHttp.delete(this.basePath + picture_id).pipe(
      map(json => new Directory().parse(json.directory)));
  }

  delete(picture_id: number) {
    return this.apiHttp.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.apiHttp.patch(this.basePath + picture_id).pipe(
      map(json => new Directory().parse(json.directory)));
  }
}
