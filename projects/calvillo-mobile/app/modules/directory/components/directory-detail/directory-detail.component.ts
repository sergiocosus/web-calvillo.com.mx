import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Directory } from '@calvillo/api';
import * as utils from 'utils/utils';
import { MapView } from 'nativescript-google-maps-sdk';

@Component({
  selector: 'app-directory-detail',
  moduleId: module.id,
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.scss']
})
export class DirectoryDetailComponent implements OnInit {
  @ViewChild('mapView') mapViewRef: ElementRef;
  private mapView: MapView;

  onMapReady(event) {
    this.mapView = <MapView>this.mapViewRef.nativeElement;

    console.log('Map Ready');
    this.mapView.latitude  = this.directory.latitude;
    this.mapView.longitude  = this.directory.longitude;
    this.mapView.zoom  = 11;

    console.log(this.mapView.latitude);
    console.log(this.mapView.longitude);
    console.log(this.mapView.zoom);
  };

  @Input() directory: Directory;
  @Input() showMap = true;

  constructor(/*private dialog: MatDialog*/) {
  }

  ngOnInit() {

  }

  openMapModal() {
    /*
    const dialog = this.dialog.open(PlaceOnMapModalComponent);
    dialog.componentInstance.setData(
      this.directory.longitude,
      this.directory.latitude,
      this.directory.title
    );
    */
  }

  openUrl(url) {
    utils.openUrl(url);
  }

}
