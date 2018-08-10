import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'app-home-page',
  moduleId: module.id,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private page: Page) {}

  ngOnInit() {
    this.page.backgroundImage = '~/assets/images/landing-page-background-night.jpg';
  }

}
