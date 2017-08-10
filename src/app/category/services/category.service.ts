import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Category} from '../category.model';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class CategoryService {
  basePath = 'category/';

  private categoriesSubject: ReplaySubject<Category[]> = new ReplaySubject(1);
  private categoriesRequest: Observable<Category[]>;

  constructor(private apiHttp: ApiHttp) { }

  get(category_id: number) {
    return this.apiHttp.get(this.basePath + category_id)
      .map(json => new Category().parse(json.category));
  }

  getAll() {
    return this.apiHttp.get(this.basePath)
      .map(json => Category.parseArray(json.categories));
  }

  getAllCached(params?, refresh = false) {
      if (refresh || !this.categoriesRequest) {
      this.categoriesRequest = this.getAll();

      this.categoriesRequest.subscribe(
        result => this.categoriesSubject.next(result),
        err => this.categoriesSubject.error(err)
      );
    }

    return this.categoriesSubject.asObservable();
  }

  getByLink(link: string) {
    return this.apiHttp.get(this.basePath + 'link/' + link)
      .map(json => new Category().parse(json.category));
  }


  getSubCategoriesByLink(link: string) {
    return this.apiHttp.get(this.basePath + 'link/' + link + '/sub-categories')
        .map(json => Category.parseArray(json.categories));
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
