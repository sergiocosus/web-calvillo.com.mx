import { Injectable } from '@angular/core';
import {ApiHttp} from '../shared/api-http.service';

@Injectable()
export class CategoryService {

  constructor(private apiHttp: ApiHttp) { }

  get(category_id: number) {
    return this.apiHttp.get('category/' + category_id)
      .map(json => json.category);
  }
}
