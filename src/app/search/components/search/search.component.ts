import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {FormControl} from '@angular/forms';
import {Picture} from '../../../picture/picture.model';
import {Category} from '../../../category/category.model';
import {Router} from '@angular/router';
import {Directory} from '../../../directory/directory.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @HostListener('window:click',['$event']) clickWindow($event: MouseEvent) {
    let element = $event.srcElement;
    if (!this.elementRef.nativeElement.contains(element)) {
      this.hideInput();
    }
  };

  @Output() hidden = new EventEmitter();
  @Output() shown = new EventEmitter();
  @Input() showUnderline = true;
  @Input() alwaysShow = false;
  @Input() placeholder = "¿Qué deseas buscar? Restaurant, Hoteles... ";

  hide = true;


  stateCtrl = new FormControl();
  query: string;
  search;
  constructor(private elementRef: ElementRef,
              private searchService: SearchService,
              private router: Router) {
    this.stateCtrl.valueChanges
        .debounceTime(200)
        .subscribe(name => {
          if (name && name != '') {
            this.search =  this.searchService.get(name);
          } else {
            this.search = null;
          }
        });
  }

  ngOnInit() {
    if (this.alwaysShow) {
      this.hide = false;
    } else {
      this.hideInput();
    }
  }

  displayWith(model) {
    if (model) {
      return model.title;
    }
    return '';
  }

  selectedCategory(category: Category) {
    this.router.navigateByUrl(category.routerLink);
    setTimeout(() => {
      this.query = '';
    }, 100);
    this.hideInput();
  }

  selectedModel(category: Category, model:  Picture | Directory) {
    this.router.navigateByUrl(model.getRouterLink(category));
    setTimeout(() => {
      this.query = '';
    }, 100);
    this.hideInput();
  }

  toggleHidden() {
    if (this.hide) {
      this.showInput();
    } else {
      this.hideInput();
    }
  }

  showInput(){
    this.hide = false;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 200);
    this.shown.emit();
  }

  hideInput() {
    if (this.alwaysShow) {
      return ;
    }
    this.hide = true;
    this.hidden.emit()
  }


}
