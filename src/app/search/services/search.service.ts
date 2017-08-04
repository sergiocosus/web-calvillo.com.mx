import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Picture} from '../../picture/picture.model';
import {Directory} from '../../directory/directory.model';
import {Category} from '../../category/category.model';

@Injectable()
export class SearchService {
  basePath = 'search/';
  constructor(private apiHttp: ApiHttp) { }

  get(query) {
    return this.apiHttp.get(this.basePath, {query: query})
        .map(json => {
            json.pictures = Picture.parseArray(json.pictures);
            json.directories = Directory.parseArray(json.directories);
            json.categories = Category.parseArray(json.categories);
            return json;
        });
  }
}
