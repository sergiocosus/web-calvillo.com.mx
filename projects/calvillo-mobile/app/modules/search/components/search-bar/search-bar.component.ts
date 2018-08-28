import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Directory, Picture, SearchService } from '@calvillo/api';
import { RouterExtensions } from 'nativescript-angular';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  mergeMap,
  tap
} from 'rxjs/operators';
import { isAndroid, Page } from 'tns-core-modules/ui/page';
import { UtilsService } from '~/shared/services/utils.service';
import { from } from 'rxjs';
import { SearchBar } from 'tns-core-modules/ui/search-bar';


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
              private utilService: UtilsService,
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
      mergeMap(
        text => this.searchService.get(text)
          .pipe(catchError(error => {
            console.error(error);
            this.utilService.checkConnectivity();
            this.loading = false;
            return from([]);
          }))
      )
    ).subscribe(
      results => {
        this.loading = false;
        this.results = [...results.directories, ...results.categories, ...results.pictures];
        this.resultsChanged.emit(this.results);
      }
    );
  }

  ngOnInit(): void {
  }

  getType(result: (Picture | Directory | Category)) {
    if (result instanceof Picture) {
      return 'picture';
    } else if (result instanceof Directory) {
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
    console.log(result);

    if (result instanceof Picture) {
      if (result.categories.length) {
        return result.getRouterLink(result.categories[0])
      }
    } else if (result instanceof Directory) {
      if (result.categories.length) {
        console.log(result);
        return result.getRouterLink(result.categories[0])
      }
    } else {
      return result.routerLink;
    }
  }

  sbLoaded(args) {
    const searchbar: SearchBar = args.object;

    if (isAndroid) {
      searchbar.android.clearFocus();
    }
  }

}
