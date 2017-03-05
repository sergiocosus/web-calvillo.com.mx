import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  category: any[];
  constructor(private categoryService:CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.get(1).subscribe(
      category => this.category = category
    );
  }
}
