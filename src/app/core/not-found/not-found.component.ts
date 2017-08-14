import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SearchService} from '../../search/services/search.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  query = null;
  search: Observable<any>;
  defaultCategoryId = environment.defaultCategoryId;

  constructor(private router: Router,
              private searchService: SearchService) {
    this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe((e: NavigationEnd) => {
          this.checkUrl(e.url);
        });
  }
  ngOnInit() {
  }


  checkUrl(url: string) {
    const pieces = url.split('/');
    this.query = pieces[pieces.length - 1];
    this.search = this.searchService.get(this.query);
  }
}
