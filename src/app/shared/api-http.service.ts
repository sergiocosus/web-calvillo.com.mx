import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {environment} from "../../environments/environment";
import {LocalStorageService} from './services/local-storage.service';


@Injectable()
export class ApiHttp {
  private apiUrl;

  constructor(private config: ApiConfig,
              private http: Http,
              private localStorage: LocalStorageService,
  ) {
    this.apiUrl = config.apiUrl;
  }

  get(url:string, data?:any, options?:RequestOptionsArgs):Observable<any> {
    if(options){
      options.body = '';
    }else {
      options = {body:''};
    }
    return this.http.get(this.apiUrl + url + this.serializeGetParams(data), this.appendHeaders(options))
      .map(this.mapJson)
      .catch(this.handleError);
  }

  post(url:string, body?:any, options?:RequestOptionsArgs):Observable<any> {
    return this.http.post(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options))
      .map(this.mapJson)
      .catch(this.handleError);
  }

  put(url:string, body:any, options?:RequestOptionsArgs):Observable<any> {
    return this.http.put(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options))
      .map(this.mapJson)
      .catch(this.handleError);
  }

  delete(url:string, options?:RequestOptionsArgs):Observable<any> {
    if (!options) {
      options = { body: "" };
    }

    return this.http.delete(this.apiUrl + url, this.appendHeaders(options))
      .map(this.mapJson)
      .catch(this.handleError);
  }

  patch(url:string, body?:any, options?:RequestOptionsArgs):Observable<any> {
    return this.http.patch(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options))
      .map(this.mapJson)
      .catch(this.handleError);
  }

  head(url:string, options?:RequestOptionsArgs):Observable<any> {
    return this.http.head(this.apiUrl + url, this.appendHeaders(options))
      .map(this.mapJson)
      .catch(this.handleError);
  }

  private mapJson(res:Response):any {
    return res.json().data;
  }

  private appendHeaders(options?:RequestOptionsArgs):RequestOptionsArgs {
    if (!options) {
      options = {};
    }

    if (!options.headers) {
      options.headers = new Headers();
    }
    let headers = options.headers;

    const access_token = this.localStorage.get('access_token');

    if ( access_token ) {
      headers.append('Authorization', 'Bearer ' + access_token);
    }
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return options;
  }

  private handleError(error:any, observable:Observable<any>) {
    // In a real world app, we might send the error to remote logging infrastructure
    try {
      var json = error.json();
      console.error(json);
    } catch (e) {
      console.error(error);
    }

    return Observable.throw(json);
  }

  private serializeGetParams(object:any):string {
    if (!object) {
      return "";
    }

    var str = "?";
    for (var key in object) {
      if (str != "") {
        str += "&";
      }
      if(Array.isArray(object[key])){
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

export class ApiConfig {
  constructor(public apiUrl:string) {
  }
}



export function apiHttpServiceFactory (http: Http, localStorage: LocalStorageService)  {
  return new ApiHttp(new ApiConfig(
    environment.apiUrl,
  ), http, localStorage);
}


export let apiHttpServiceProvider =
  {
    provide: ApiHttp,
    useFactory: apiHttpServiceFactory,
    deps: [Http, LocalStorageService]
  };


