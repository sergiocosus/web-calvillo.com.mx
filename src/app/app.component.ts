import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CategoryService} from './category/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  constructor() {

  }

  ngOnInit(): void {

  }

}
