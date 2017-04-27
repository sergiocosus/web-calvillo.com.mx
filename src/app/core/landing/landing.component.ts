import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {Category} from '../../category/category.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService:CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getNewest(50).subscribe(
      categories => this.categories = categories
    );
  }
}
