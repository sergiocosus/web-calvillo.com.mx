import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'app-home-page',
  moduleId: module.id,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  results: any[];

  constructor(private page: Page,
              private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.page.backgroundImage = '~/assets/images/landing-page-background-night.jpg';
  }

}
