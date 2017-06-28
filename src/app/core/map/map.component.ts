import { Component, OnInit } from '@angular/core';
import {DirectoryService} from '../../directory/services/directory.service';
import {Directory} from '../../directory/directory.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  directories: Directory[];

  longitudeMap =  -102.7104999;
  latitudeMap = 21.8531537;

  constructor(private directoryService: DirectoryService) { }

  ngOnInit() {
    this.directoryService.get().subscribe(
      directories => {
        this.directories = directories;
      }
    );
  }

}
