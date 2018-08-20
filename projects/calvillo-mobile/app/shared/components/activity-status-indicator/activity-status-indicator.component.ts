import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '~/shared/services/utils.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'app-activity-status-indicator',
  moduleId: module.id,
  templateUrl: './activity-status-indicator.component.html',
  styleUrls: ['./activity-status-indicator.component.scss']
})
export class ActivityStatusIndicatorComponent implements OnInit {
  @Input() loading: boolean;
  @Input() failed: boolean;
  noConnection: boolean;

  constructor(private utilsService: UtilsService,
              private routerExtension: RouterExtensions) {
  }

  ngOnInit() {
    this.noConnection = !this.utilsService.thereIsConnection();
  }

  back() {
    this.routerExtension.backToPreviousPage();
  }
}
