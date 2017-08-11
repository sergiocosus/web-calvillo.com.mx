import { Injectable } from '@angular/core';
import {PlatformService} from './platform.service';

@Injectable()
export class LocalStorageService {
  constructor(private platformService: PlatformService) {
    if(this.platformService.isPlatformServer()){
      return;
    }
    if (!localStorage) {
      console.warn('LOCAL_STORAGE_NOT_SUPPORTED');
    }
  }

  get(key: string) {
    if(this.platformService.isPlatformServer()){
      return;
    }

    if (localStorage) {
      return localStorage.getItem(key);
    }
  }

  set(key, value) {
    if(this.platformService.isPlatformServer()){
      return;
    }

    if (localStorage) {
      return localStorage.setItem(key, value);
    }
  }

  remove(key) {
    if(this.platformService.isPlatformServer()){
      return;
    }

    if (localStorage) {
      return localStorage.removeItem(key);
    }
  }

}
