import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  Category,
  CategoryService,
  Directory,
  DirectoryService
} from '@calvillo/api';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import * as utils from 'tns-core-modules/utils/utils';

@Component({
  selector: 'app-directory-map',
  moduleId: module.id,
  templateUrl: './directory-map.component.html',
  styleUrls: ['./directory-map.component.scss']
})
export class DirectoryMapComponent implements OnInit {
  @ViewChild('mapView') mapViewRef: ElementRef;
  private mapView: MapView;

  categories: Category[];
  selectedCategory: Category;
  selectedDirectory: Directory;

  constructor(private directoryService: DirectoryService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getSubCategoriesByLink('directorio').subscribe(
      categories => this.categories = categories
    );
  }

  onMapReady(event) {
    this.mapView = <MapView>this.mapViewRef.nativeElement;

    this.categories.forEach(category => {
      console.log(category);
      console.log(category.directories);
      category.directories.forEach(
        directory => this.mapView.addMarker(this.createMarker(directory))
      );
    });
    this.setDefaultPosition();
  }

  onMarkerSelect(args) {
    const marker: Marker = args.marker;
    console.log(marker.userData);

    this.selectDirectory(marker.userData as Directory);
  }


  private setDefaultPosition() {
    this.mapView.latitude = 21.8531537;
    this.mapView.longitude = -102.7104999;
    this.mapView.zoom = 13;
  }

  select(category: Category) {
    console.log(category);
    this.selectedCategory = category;
  }

  selectDirectory(directory: Directory) {
    this.selectedDirectory = directory;
    this.mapView.latitude = directory.latitude;
    this.mapView.longitude = directory.longitude;
    this.mapView.zoom = 16;
  }

  unSelect() {
    this.selectedCategory = null;
    this.selectedDirectory = null;
    this.setDefaultPosition();
  }




  private createMarker(directory: Directory) {
    const marker = new Marker();
    marker.position = Position.positionFromLatLng(
      directory.latitude,
      directory.longitude
    );
    marker.title = directory.title;
    marker.draggable = false;
    marker.userData = directory;

    return marker;
  }

  openUrl(url) {
    utils.openUrl(url);
  }

}
