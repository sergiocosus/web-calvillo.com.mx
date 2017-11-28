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
  public defaultCatId: string;

  constructor(private categoryService:CategoryService,
              private navbarService: NavbarService) {
    this.defaultCatId = environment.defaultCategoryId;
  }

  ngOnInit(): void {
    this.categoryService.getNewest(6).subscribe(
      categories => this.categories = categories
    );
    this.navbarService.setTitle(null);
  }
}
