import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiHttp } from './api-http.service';
import { Picture } from '../models/picture.model';
import { Directory } from '../models/directory.model';
import { Category } from '../models/category.model';

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
        json.pictures = Picture.parseArray(json.pictures);
        json.directories = Directory.parseArray(json.directories);
        json.categories = Category.parseArray(json.categories);
        return json;
      }));
  }
}
