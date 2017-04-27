import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Category} from '../category.model';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private apiHttp: ApiHttp) { }

  get(category_id: number) {
    return this.apiHttp.get('category/' + category_id)
      .map(json => new Category().parse(json.category));
  }

  getNewest(elements?: number) {
    return this.apiHttp.get('category/newest', {elements: elements})
      .map(json => Category.parseArray(json.categories));
  }

  post(data) {
    return this.apiHttp.post('category', data)
      .map(json => new Category().parse(json.category));
  }
}
