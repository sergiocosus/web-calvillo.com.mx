import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Directory } from '@calvillo/api';
import * as utils from 'tns-core-modules/utils/utils';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

@Component({
  selector: 'app-directory-detail',
  moduleId: module.id,
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.scss']
})
export class DirectoryDetailComponent implements OnInit {
  @ViewChild('mapView') mapViewRef: ElementRef;
  @Input() directory: Directory;

  private mapView: MapView;

  onMapReady(event) {
    this.mapView = <MapView>this.mapViewRef.nativeElement;

    this.mapView.latitude  = this.directory.latitude;
    this.mapView.longitude  = this.directory.longitude;
    this.mapView.zoom  = 13;
    const marker = this.createMarker(this.directory);

    this.mapView.addMarker(marker);
  }

  private createMarker(directory: Directory) {
    const marker = new Marker();
    marker.position = Position.positionFromLatLng(
      directory.latitude,
      directory.longitude
    );
    marker.title = this.directory.title;
    marker.draggable = false;

    return marker;
  }

  constructor() {
  }

  ngOnInit() {

  }

  openUrl(url) {
    utils.openUrl(url);
  }

}
