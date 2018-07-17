import { Injectable } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Injectable({
  providedIn: 'root'
})
export class SideDrawerService {
  sideDrawer: RadSideDrawer;

  constructor() { }

  open() {
    this.sideDrawer.showDrawer();
  }

  close() {
    this.sideDrawer.closeDrawer();
  }
}
