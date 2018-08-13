import { Component, Input, OnInit } from '@angular/core';
import { SideDrawerService } from '~/shared/services/side-drawer.service';
import * as utils from 'utils/utils';

@Component({
  selector: 'app-action-bar',
  moduleId: module.id,
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() title;
  constructor(private sideDrawerService: SideDrawerService) { }

  ngOnInit() {
  }

  open() {
    utils.ad.dismissSoftInput();

    this.sideDrawerService.open();
  }

}
