import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiHttp } from './api-http.service';
import { Category } from '../models/category.model';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  basePath = 'category/';

  private categoriesSubject: ReplaySubject<Category[]> = new ReplaySubject(1);
  private categoriesRequest: Observable<Category[]>;

  constructor(private apiHttp: ApiHttp) {
  }

  get(category_id: number) {
    return this.apiHttp.get(this.basePath + category_id).pipe(
      map(json => new Category().parse(json.category)));
  }

  getAll() {
    return this.apiHttp.get(this.basePath).pipe(
      map(json => Category.parseArray(json.categories)));
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
    return this.apiHttp.get(this.basePath + 'link/' + link).pipe(
      map(json => new Category().parse(json.category)));
  }


  getSubCategoriesByLink(link: string) {
    return this.apiHttp.get(this.basePath + 'link/' + link + '/sub-categories').pipe(
      map(json => Category.parseArray(json.categories)));
  }

  getNewest(elements?: number) {
    return this.apiHttp.get(this.basePath + 'newest', {elements: elements}).pipe(
      map(json => Category.parseArray(json.categories)));
  }

  put(data) {
    return this.apiHttp.put(this.basePath + data.id, data).pipe(
      map(json => new Category().parse(json.category)));
  }

  remove(picture_id: number) {
    return this.apiHttp.delete(this.basePath + picture_id).pipe(
      map(json => new Category().parse(json.category)));
  }

  delete(picture_id: number) {
    return this.apiHttp.delete(this.basePath + 'force/' + picture_id);
  }

  restore(picture_id: number) {
    return this.apiHttp.patch(this.basePath + picture_id).pipe(
      map(json => new Category().parse(json.category)));
  }

  post(data) {
    return this.apiHttp.post(this.basePath, data).pipe(
      map(json => new Category().parse(json.category)));
  }

  facebookPost(category_id, data) {
    return this.apiHttp.post(`${this.basePath}${category_id}/facebook`, data)
  }
}
