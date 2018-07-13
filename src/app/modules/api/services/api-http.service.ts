import { Observable, throwError as observableThrowError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';

import { LocalStorageService } from './local-storage.service';
import {
  CALVILLO_COM_MX_API_CONFIG,
  CalvilloComMxApiConfig
} from '@calvillo/api/types/api-config';


@Injectable({
  providedIn: 'root'
})
export class ApiHttp {
  private apiUrl;

  constructor(@Inject(CALVILLO_COM_MX_API_CONFIG) private config: CalvilloComMxApiConfig,
              private http: Http,
              private localStorage: LocalStorageService
  ) {
    this.apiUrl = config.apiUrl;
  }

  get(url: string, data?: any, options?: RequestOptionsArgs): Observable<any> {
    if (options) {
      options.body = '';
    } else {
      options = {body: ''};
    }
    return this.http.get(this.apiUrl + url + this.serializeGetParams(data), this.appendHeaders(options)).pipe(
      map(this.mapJson),
      catchError(this.handleError));
  }

  post(url: string, body?: any, options?: RequestOptionsArgs): Observable<any> {
    return this.http.post(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options)).pipe(
      map(this.mapJson),
      catchError(this.handleError));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.http.put(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options)).pipe(
      map(this.mapJson),
      catchError(this.handleError),);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    if (!options) {
      options = {body: ''};
    }

    return this.http.delete(this.apiUrl + url, this.appendHeaders(options)).pipe(
      map(this.mapJson),
      catchError(this.handleError),);
  }

  patch(url: string, body?: any, options?: RequestOptionsArgs): Observable<any> {
    return this.http.patch(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options)).pipe(
      map(this.mapJson),
      catchError(this.handleError),);
  }

  head(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.http.head(this.apiUrl + url, this.appendHeaders(options)).pipe(
      map(this.mapJson),
      catchError(this.handleError),);
  }

  private mapJson(res: Response): any {
    return res.json().data;
  }

  private appendHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) {
      options = {};
    }

    if (!options.headers) {
      options.headers = new Headers();
    }
    let headers = options.headers;

    const access_token = this.localStorage.get('access_token');

    if (access_token) {
      headers.append('Authorization', 'Bearer ' + access_token);
    }
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return options;
  }

  private handleError(error: any, observable: Observable<any>) {
    // In a real world app, we might send the error to remote logging infrastructure
    try {
      var json = error.json();
      console.error(json);
    } catch (e) {
      console.error(error);
    }

    return observableThrowError(json);
  }

  private serializeGetParams(object: any): string {
    if (!object) {
      return "";
    }

    var str = "?";
    for (var key in object) {
      if (str != "") {
        str += "&";
      }
      if (Array.isArray(object[key])) {
        object[key].forEach(value => {
          str += key + encodeURIComponent('[]') + "="
            + (value ? encodeURIComponent(value) : '') + '&';
        });
      } else {
        str += key + "=" + (object[key] ? encodeURIComponent(object[key]) : '');
      }
    }
    return str;
  }
}
