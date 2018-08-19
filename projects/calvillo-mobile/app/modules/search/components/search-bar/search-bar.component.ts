import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Directory, Picture, SearchService } from '@calvillo/api';
import { RouterExtensions } from 'nativescript-angular';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter, finalize,
  mergeMap, tap
} from 'rxjs/operators';
import { Page } from 'tns-core-modules/ui/page';


@Component({
  selector: 'app-search-bar',
  moduleId: module.id,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder = '¿Qué deseas buscar? Restaurant, Hoteles... ';
  @Output() resultsChanged = new EventEmitter();

  results: (Picture | Directory | Category)[];
  formControl = new FormControl();
  loading: boolean;

  constructor(private searchService: SearchService,
              private routerExtensions: RouterExtensions,
              private page: Page) {

    this.formControl.valueChanges.pipe(
      filter(value => value && value.length),
      distinctUntilChanged(),
      debounceTime(300),
      tap(() => {
        this.loading = true;
        this.results = null;
        this.resultsChanged.emit(this.results);
      }),
      finalize(() => this.loading = false),
      mergeMap( text => this.searchService.get(text))
    ).subscribe(results => {
      this.results = [...results.directories, ...results.categories, ...results.pictures];
      this.resultsChanged.emit(this.results);
    });
  }

  ngOnInit(): void {
  }

  getType(result: (Picture | Directory | Category)) {
    if (result instanceof Picture) {
      return 'picture';
    } else if (result instanceof  Directory) {
      return 'directory';
    } else {
      return 'category';
    }
  }

  public onSubmit(args) {
    if (this.results.length) {
      this.routerExtensions.navigateByUrl(
        this.getRouterLinkResult(this.results[0])
      );
    }
  }

  clear() {
    this.results = null;
    this.resultsChanged.emit(this.results);
    this.loading = false;
  }

  onTap(event) {
    const result = this.results[event.index];
    this.routerExtensions.navigateByUrl(
        this.getRouterLinkResult(result)
    );
  }

  getRouterLinkResult(result: (Picture | Directory | Category)) {
      if (result instanceof Picture) {
          if (result.categories.length) {
              return result.getRouterLink(result.categories[0])
          }
      } else if (result instanceof  Directory) {
          if (result.categories.length) {
              return result.getRouterLink(result.categories[0])
          }
      } else {
          return result.routerLink;
      }
  }

}
