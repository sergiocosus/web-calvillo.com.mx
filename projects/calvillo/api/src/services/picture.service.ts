import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Picture } from '../models/picture.model';
import { HttpClient } from '@angular/common/http';
import { PaginationService } from './pagination.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  basePath = 'picture/';

  constructor(private http: HttpClient,
              private paginationService: PaginationService) {
  }

  getAll(filters?: { search?: string, limit?: number }) {
    const params = this.paginationService.addFilterParams(filters);

    return this.http.get(this.basePath, {params}).pipe(
      map(json => Picture.parseArray(json['pictures']))
    );
  }

  post(data) {
    return this.http.post(this.basePath, data).pipe(
      map(json => new Picture().parse(json['picture'])));
  }

  facebookPost(category_id, picture_id, data) {
    return this.http.post(`${this.basePath}${picture_id}/facebook/${category_id} `, data)
  }

  put(data) {
    return this.http.put(this.basePath + data.id, data).pipe(
      map(json => new Picture().parse(json['picture'])));
  }

  remove(picture_id: number) {
    return this.http.delete(this.basePath + picture_id).pipe(
      map(json => new Picture().parse(json['picture'])));
  }

  delete(picture_id: number) {
    return this.http.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.http.patch(this.basePath + picture_id, {}).pipe(
      map(json => new Picture().parse(json['picture'])));
  }

  getLinkExists(link) {
    const params = this.paginationService.addFilterParams({link});

    return this.http.get(this.basePath + 'link-exists', {params});
  }
}
