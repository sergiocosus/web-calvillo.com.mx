import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiHttp } from './api-http.service';
import { Picture } from '../models/picture.model';
import { Directory } from '../models/directory.model';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  basePath = 'search/';

  constructor(private apiHttp: ApiHttp) {
  }

  get(query) {
    return this.apiHttp.get(this.basePath, {query: query}).pipe(
      map(json => {
        return {
          pictures: Picture.parseArray(json.pictures),
          directories: Directory.parseArray(json.directories),
          categories: Category.parseArray(json.categories),
        };
      }));
  }
}
