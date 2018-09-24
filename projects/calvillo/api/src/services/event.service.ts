import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiHttp } from './api-http.service';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  basePath = 'event/';

  constructor(private apiHttp: ApiHttp) {
  }

  get(data?) {
    return this.apiHttp.get(this.basePath, data).pipe(
      map(json => Event.parseArray(json.events)));
  }

  getBySlug(link: string) {
    return this.apiHttp.get(this.basePath + 'slug/' + link).pipe(
      map(json => new Event().parse(json.event)));
  }


  post(data) {
    return this.apiHttp.post(this.basePath, data).pipe(
      map(json => new Event().parse(json.event)));
  }

  put(data) {
    return this.apiHttp.put(this.basePath + data.id, data).pipe(
      map(json => new Event().parse(json.event)));
  }

  remove(event_id: number) {
    return this.apiHttp.delete(this.basePath + event_id).pipe(
      map(json => new Event().parse(json.event)));
  }

  delete(event_id: number) {
    return this.apiHttp.delete(this.basePath + 'force/' + event_id);
  }

  restore(event_id: number) {
    return this.apiHttp.patch(this.basePath + event_id).pipe(
      map(json => new Event().parse(json.event)));
  }
}
