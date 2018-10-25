import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Directory } from '../models/directory.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  basePath = 'directory/';

  constructor(private http: HttpClient,
              private paginationService: PaginationService) {
  }

  getAll(filters?: { search?: string, limit?: number }) {
    const params = this.paginationService.addFilterParams(filters);

    return this.http.get(this.basePath, {params}).pipe(
      map(json => Directory.parseArray(json['directories']))
    );
  }

  getByLink(link: string) {
    return this.http.get(this.basePath + 'link/' + link).pipe(
      map(json => new Directory().parse(json['directory'])));
  }


  post(data) {
    return this.http.post(this.basePath, data).pipe(
      map(json => new Directory().parse(json['directory'])));
  }

  put(data) {
    return this.http.put(this.basePath + data.id, data).pipe(
      map(json => new Directory().parse(json['directory'])));
  }

  remove(picture_id: number) {
    return this.http.delete(this.basePath + picture_id).pipe(
      map(json => new Directory().parse(json['directory'])));
  }

  delete(picture_id: number) {
    return this.http.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.http.patch(this.basePath + picture_id, {}).pipe(
      map(json => new Directory().parse(json['directory'])));
  }
}
