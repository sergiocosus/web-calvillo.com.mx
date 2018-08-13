import { Component, Input, OnInit } from '@angular/core';
import { SideDrawerService } from '~/shared/services/side-drawer.service';
import * as utils from 'utils/utils';
import { environment } from '~/environment';
import * as SocialShare from 'nativescript-social-share';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-action-bar',
  moduleId: module.id,
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() title;
  constructor(private sideDrawerService: SideDrawerService,
              private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  open() {
    utils.ad.dismissSoftInput();

    this.sideDrawerService.open();
  }

  onShare() {
    const url = environment.webUrl + this.routerExtensions.router.url;
    console.log(url);
    SocialShare.shareUrl(url, '¡Comparte a Calvilo!');
  }

}
