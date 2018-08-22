import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular';
import { firebase } from 'nativescript-plugin-firebase/firebase-common';
import { UtilsService } from '~/shared/services/utils.service';

@Component({
  selector: 'app-home-page',
  moduleId: module.id,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  results: any[];

  constructor(private page: Page,
              private routerExtensions: RouterExtensions,
              private utilsService: UtilsService) {}

  ngOnInit() {
    firebase.analytics.setScreenName({
      screenName: 'home-page'
    });
    this.page.backgroundImage = '~/assets/images/landing-page-background-night.jpg';
  }

  showBanner() {
    this.utilsService.createAdBanner();

  }

}
