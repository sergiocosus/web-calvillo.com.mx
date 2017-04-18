import {Injectable, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class ResolutionService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  getSize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
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
