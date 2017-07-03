import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {Category} from '../../category/category.model';
import {NavbarService} from '../../shared/services/navbar.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  adSenseEnabled = environment.adSenseEnabled;
  categories: Category[];
  constructor(private categoryService:CategoryService,
              private navbarService: NavbarService) {

  }

  ngOnInit(): void {
    this.categoryService.getNewest(4).subscribe(
      categories => this.categories = categories
    );
    this.navbarService.setTitle(null);
  }
}
