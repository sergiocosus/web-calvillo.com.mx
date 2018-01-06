import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category/services/category.service';
import {Category} from '../../category/category.model';
import {NavbarService} from '../../shared/services/navbar.service';
import {environment} from '../../../environments/environment';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  adSenseEnabled = environment.adSenseEnabled;
  categories: Category[];
  public defaultCatId: string;
  greeting: string;

  constructor(private categoryService:CategoryService,
              private navbarService: NavbarService,
              private meta: Meta) {
    this.defaultCatId = environment.defaultCategoryId;

    const hours = new Date().getHours();
    if (hours >= 8 && hours <= 11) {
      this.greeting = 'BUENOS DÍAS';
    } else if (hours >= 12 && hours <= 17) {
      this.greeting = 'BUENAS TARDES';
    } else {
      this.greeting = 'BUENAS NOCHES';
    }
  }

  ngOnInit(): void {
    this.categoryService.getNewest(6).subscribe(
      categories => this.categories = categories
    );
    this.navbarService.setTitle(null);
    this.updateMetaTags();

  }

  updateMetaTags() {
    this.meta.updateTag({
        property: 'og:image',
        content: 'https://calvillo.com.mx/assets/landing-page-background-night.jpg'
    });

    this.meta.updateTag({
        property: 'og:title',
        content: 'Calvillo, Pueblo Mágico'
    });


    const description = 'Calvillo.com.mx te sumergirá en la magia del pueblo mágico ' +
        'por medio de sus galerías fotográficas, además podrás conocer lugares de interés ' +
        'por medio de nuestro directorio. ' +
        '¡Disfruta de la Capital Mundial de la Guayaba!';

    this.meta.updateTag({
        property: 'og:description',
        content: description
    });

    this.meta.updateTag({
        name: 'description',
        content: description
    });
}
}
