import { Observable, throwError as observableThrowError } from 'rxjs';

import { EventEmitter, Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttp {
  private apiUrl;
  private errorListener = new EventEmitter();

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
    this.apiUrl = '';
  }

  get(url: string, data?: any, options?): Observable<any> {
    return this.http.get(this.apiUrl + url + this.serializeGetParams(data), this.appendHeaders(options));
  }

  post(url: string, body?: any, options?): Observable<any> {
    return this.http.post(this.apiUrl + url, body, this.appendHeaders(options));
  }

  put(url: string, body: any, options?): Observable<any> {
    return this.http.put(this.apiUrl + url, body, this.appendHeaders(options));
  }

  delete(url: string, options?): Observable<any> {
    if (!options) {
      options = {body: ''};
    }

    return this.http.delete(this.apiUrl + url, this.appendHeaders(options));
  }

  patch(url: string, body?: any, options?): Observable<any> {
    return this.http.patch(this.apiUrl + url, body, this.appendHeaders(options));
  }

  head(url: string, options?): Observable<any> {
    return this.http.head(this.apiUrl + url, this.appendHeaders(options));
  }

  private appendHeaders(options?) {
    if (!options) {
      options = {};
    }

    return options;
  }

  private handleError(error: any, observable: Observable<any>) {
    // In a real world app, we might send the error to remote logging infrastructure
    console.error(error);
    console.error(error.error);

    this.errorListener.emit(error.error);

    return observableThrowError(error.error);
  }

  public onError() {
    return this.errorListener;
  }

  private serializeGetParams(object: any): string {
    if (!object) {
      return '';
    }

    let str = '?';
    for (let key in object) {
      if (str != '') {
        str += '&';
      }
      if (Array.isArray(object[key])) {
        object[key].forEach(value => {
          str += key + encodeURIComponent('[]') + '='
            + (value ? encodeURIComponent(value) : '') + '&';
        });
      } else {
        str += key + '=' + (object[key] ? encodeURIComponent(object[key]) : '');
      }
    }
    return str;
  }
}
