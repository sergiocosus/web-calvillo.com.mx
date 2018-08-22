import { Component, OnInit } from '@angular/core';
import { firebase } from 'nativescript-plugin-firebase/firebase-common';

@Component({
  selector: 'app-map-page',
  moduleId: module.id,
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.analytics.setScreenName({
      screenName: 'map-page'
    });
  }

}
