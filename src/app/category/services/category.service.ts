import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Category} from '../category.model';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryService {
  basePath = 'category/';

  constructor(private apiHttp: ApiHttp) { }

  get(category_id: number) {
    return this.apiHttp.get(this.basePath + category_id)
      .map(json => new Category().parse(json.category));
  }

  getByLink(link: string) {
    return this.apiHttp.get(this.basePath + 'link/' + link)
      .map(json => new Category().parse(json.category));
  }

  getNewest(elements?: number) {
    return this.apiHttp.get(this.basePath + 'newest', {elements: elements})
      .map(json => Category.parseArray(json.categories));
  }

  put(data) {
    return this.apiHttp.put(this.basePath + data.id , data)
      .map(json => new Category().parse(json.category));
  }

  remove(picture_id: number) {
    return this.apiHttp.delete(this.basePath + picture_id)
      .map(json => new Category().parse(json.category));
  }

  delete(picture_id: number) {
    return this.apiHttp.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.apiHttp.patch(this.basePath + picture_id)
      .map(json => new Category().parse(json.category));
  }

  post(data) {
    return this.apiHttp.post(this.basePath, data)
      .map(json => new Category().parse(json.category));
  }
}
