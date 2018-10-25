import { Component, OnInit } from '@angular/core';
import {
  Category,
  CategoryService,
  Directory,
  DirectoryService
} from '@calvillo/api';
import { NavbarService } from '../../shared/services/navbar.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

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

  touristicIcon = 'http://maps.google.com/mapfiles/ms/icons/blue.png';

  constructor(private directoryService: DirectoryService,
              private navbarService: NavbarService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.navbarService.setTitle('Mapa');

    this.directoryService.getAll().subscribe(
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
