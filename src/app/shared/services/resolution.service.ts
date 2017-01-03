import {Injectable, HostListener} from '@angular/core';
import {isBrowser} from 'angular2-universal';

@Injectable()
export class ResolutionService {

  constructor() { }

  getSize() {
    if (isBrowser) {
      let width = window.innerWidth
      if (width < 576) {
        return 'xs';
      } else if (width < 768 ) {
        return 'sm';
      } else if (width < 992 ) {
        return 'md';
      } else if (width < 1200 ) {
        return 'lg';
      } else {
        return 'xl';
      }
    } else {
      return null;
    }
  }

}
