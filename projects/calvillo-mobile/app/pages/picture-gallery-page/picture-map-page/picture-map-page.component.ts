import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Picture } from '@calvillo/api';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Page } from 'tns-core-modules/ui/page';
import { ModalDialogParams } from 'nativescript-angular';

@Component({
  selector: 'app-picture-map-page',
  moduleId: module.id,
  templateUrl: './picture-map-page.component.html',
  styleUrls: ['./picture-map-page.component.scss']
})
export class PictureMapPageComponent implements OnInit {
  @ViewChild('mapView') mapViewRef: ElementRef;
  private mapView: MapView;
  private picture: Picture;

  constructor(private pageRoute: PageRoute,
              private params: ModalDialogParams,
              private page: Page,
              private router: RouterExtensions) {
    this.picture = this.params.context['picture'];
  }

  ngOnInit() {
  }


  onMapReady(event) {
    this.mapView = <MapView>this.mapViewRef.nativeElement;

    this.mapView.latitude = this.picture.latitude;
    this.mapView.longitude = this.picture.longitude;
    this.mapView.zoom = 13;
    const marker = this.createMarker(this.picture);

    this.mapView.addMarker(marker);
  }


  private createMarker(picture: Picture) {
    const marker = new Marker();
    marker.position = Position.positionFromLatLng(
      picture.latitude,
      picture.longitude
    );
    marker.title = picture.title;
    marker.draggable = false;
    marker.userData = picture;

    return marker;
  }

  onClose(): void {
    this.params.closeCallback("return value");
  }
}
