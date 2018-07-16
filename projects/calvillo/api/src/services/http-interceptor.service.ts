import { Inject, Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { catchError, map } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import {
  CALVILLO_COM_MX_API_CONFIG,
  CalvilloComMxApiConfig
} from '../types/api-config';
import { throwError } from 'rxjs';
import { isObject } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private apiUrl: string | undefined;

  constructor(@Inject(CALVILLO_COM_MX_API_CONFIG) private config: CalvilloComMxApiConfig,
              private localStorage: LocalStorageService
  ) {
    this.apiUrl = config.apiUrl;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: this.apiUrl + req.url
    });


    if (this.localStorage.get('access_token')) {
      req = req.clone({
        setHeaders: {
          'authorization': 'Bearer ' + this.localStorage.get('access_token'),
        }
      });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          event = (event as HttpResponse<any>).clone({
            body: event.body.data
          });
        }

        return event;
      }),
      catchError((err: any, caught) => {
        if (err instanceof HttpErrorResponse) {
          return throwError(this.handleErrorResponse(err));
        }

        return throwError(err);
      })
    );
  }


  private handleErrorResponse(err: any) {
    let errorData;

    if (isObject(err.error)) {
      return err.error;
    }

    try {
      const json = JSON.parse(err.error);
      if (json) {
        console.log(json);
        errorData = json;
      } else {
        errorData = err;
      }
    } catch (e) {
      errorData = err;
    }
    return errorData;
  }
}
