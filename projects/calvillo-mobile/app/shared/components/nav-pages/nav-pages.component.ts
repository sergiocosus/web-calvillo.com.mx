import { Component, Input, OnInit } from '@angular/core';
import { SideDrawerService } from '~/shared/services/side-drawer.service';
import { environment } from '~/environment';

@Component({
  selector: 'app-nav-pages',
  moduleId: module.id,
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent implements OnInit {
  @Input() displayHome = true;
  mainCategoryLink = environment.defaultCategoryId;

  constructor(private sideDrawerService: SideDrawerService) { }

  ngOnInit() {
  }

  close() {
    this.sideDrawerService.close();
  }

}
