import { Component, OnInit } from '@angular/core';
import {DirectoryService} from '../../directory/services/directory.service';
import {Directory} from '../../directory/directory.model';
import {NavbarService} from '../../shared/services/navbar.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  directories: Directory[];

  longitudeMap = -102.7104999;
  latitudeMap = 21.8531537;

  adSenseEnabled = environment.adSenseEnabled;

  constructor(private directoryService: DirectoryService,
              private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.setTitle('Mapa');

    this.directoryService.get().subscribe(
      directories => {
        this.directories = directories;
      }
    );
  }

}
