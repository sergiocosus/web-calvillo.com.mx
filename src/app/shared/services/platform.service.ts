import {Inject, Injectable} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Injectable()
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  isPlatformServer() {
    return isPlatformServer(this.platformId);
  }

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
