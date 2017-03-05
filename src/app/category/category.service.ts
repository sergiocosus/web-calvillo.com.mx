import { Injectable } from '@angular/core';
import {ApiHttp} from '../shared/api-http.service';
import {Category} from './category.model';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private apiHttp: ApiHttp) { }

  get(category_id: number) {
    return this.apiHttp.get('category/' + category_id)
      .map(json => new Category().parse(json.category));
  }
}
