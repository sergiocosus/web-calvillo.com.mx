import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class NavbarService {
  private titleSubject: ReplaySubject<string> = new ReplaySubject(1);
  private title: string;


  constructor() { }

  setTitle(title: string) {
    this.title = title;
    this.titleSubject.next(title);
  }


  getTitle() {
    return this.titleSubject.asObservable();
  }
}
