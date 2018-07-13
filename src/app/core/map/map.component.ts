import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '@calvillo/api/services/directory.service';
import { Directory } from '@calvillo/api/models/directory.model';
import { NavbarService } from '../../shared/services/navbar.service';
import { environment } from '../../../environments/environment';
import { CategoryService } from '@calvillo/api/services/category.service';
import { Observable } from 'rxjs';
import { Category } from '@calvillo/api/models/category.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  directories: Directory[];
  longitudeMap = -102.7104999;
  latitudeMap = 21.8531537;
  zoomMap = 14;
  adSenseEnabled = environment.adSenseEnabled;
  categories: Observable<Category[]>;

  constructor(private directoryService: DirectoryService,
              private navbarService: NavbarService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.navbarService.setTitle('Mapa');

    this.directoryService.get().subscribe(
      directories => {
        this.directories = directories;
      }
    );

    this.categories = this.categoryService.getSubCategoriesByLink('directorio')
  }

  selectDirectory(directory: Directory) {
    this.longitudeMap = +directory.longitude;
    this.latitudeMap = +directory.latitude;
    this.zoomMap = 18;
  }
}
