import { Injectable } from '@angular/core';

let localStorage;

@Injectable()
export class LocalStorageService {
  constructor() {
    if (!localStorage) {
      console.warn('LOCAL_STORAGE_NOT_SUPPORTED');
    }
  }

  get(key: string) {
    if (localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  }

  set(key, value) {
    if (localStorage) {
      return localStorage.setItem(key, value);
    }
    return null;
  }

  remove(key) {
    if (localStorage) {
      return localStorage.removeItem(key);
    }
    return null;
  }

}
