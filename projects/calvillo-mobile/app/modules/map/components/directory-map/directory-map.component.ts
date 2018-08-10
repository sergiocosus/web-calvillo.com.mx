import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Category,
  CategoryService,
  Directory,
  DirectoryService
} from '@calvillo/api';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

import { defer } from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators/map';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import {
  SwipeDirection,
  SwipeGestureEventData
} from 'tns-core-modules/ui/gestures';
import * as geolocation from 'nativescript-geolocation';
import { Accuracy } from 'ui/enums';


const timeElapsed = defer(() => {
  const start = animationFrame.now();
  return interval(1).pipe(
    map(() => Math.floor((Date.now() - start))
  ));
});
export const durationForAnimation = (totalMs) => timeElapsed.pipe(
  map((elapsedMs: number) => elapsedMs / totalMs),
  takeWhile(t => t <= 1)
);
export const amount = (d) => (t) => t * d;
export const elasticOut = (t) => Math.sin(-5.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;

export const elasticAnimation = (time = 1000, value) => {
  return durationForAnimation(time)
    .pipe(
      map(elasticOut),
      map(amount(value))
    );
};


@Component({
  selector: 'app-directory-map',
  moduleId: module.id,
  templateUrl: './directory-map.component.html',
  styleUrls: ['./directory-map.component.scss']
})
export class DirectoryMapComponent implements OnInit {
  @ViewChild('mapView') mapViewRef: ElementRef;
  @ViewChild('scrollData') scrollData: ElementRef;
  @ViewChild('directoriesList') directoriesList: ElementRef;
  @ViewChild('categoriesList') categoriesList: ElementRef;
  private mapView: MapView;

  categories: Category[];
  selectedCategory: Category;
  directoriesWithLocation: Directory[];
  selectedDirectory: Directory;

  topExpanded = true;

  infoExpanded = true;

  constructor(private directoryService: DirectoryService,
              private categoryService: CategoryService) { }

  ngOnInit() {

    this.categoryService.getSubCategoriesByLink('directorio').subscribe(
      categories => this.categories = categories
    );

    setTimeout(() => {
      geolocation.enableLocationRequest();
    }, 1000)


  }

  onMapReady(event) {
    this.mapView = <MapView>this.mapViewRef.nativeElement;

    this.categories.forEach(category => {
      category.directories.forEach(
        directory => this.mapView.addMarker(this.createMarker(directory))
      );
    });

    setInterval(10000, () => {
      console.log('a');
      if (geolocation.isEnabled()) {
        console.log('b');

        geolocation.getCurrentLocation({
          desiredAccuracy: Accuracy.high,
          maximumAge: 5000,
          timeout: 20000
        }).then(location => {
          console.log('aaaa');
          console.log(location.latitude);
        });
      }

    });

    this.setDefaultPosition();
  }

  onMarkerSelect(args) {
    const marker: Marker = args.marker;

    this.selectDirectory(marker.userData as Directory);
  }


  private setDefaultPosition() {
    this.mapView.latitude = 21.8531537;
    this.mapView.longitude = -102.7104999;
    this.mapView.zoom = 13;
  }

  select(category: Category) {
    this.selectedCategory = category;
    this.directoriesWithLocation = this.selectedCategory.directories.filter(
      directory => directory.longitude
    );
    this.animateCategoriesList();
  }

  selectDirectory(directory: Directory) {
    this.selectedDirectory = directory;
    this.mapView.latitude = directory.latitude;
    this.mapView.longitude = directory.longitude;
    this.mapView.zoom = 16;

    const marketFound = this.mapView.findMarker(
      marker =>  marker.userData === directory
    );

    this.topExpanded = false;
    this.animateTop();

    marketFound.showInfoWindow();
  }

  unSelect() {
    this.selectedCategory = null;
    this.selectedDirectory = null;
    this.directoriesWithLocation = null;
    this.topExpanded = true;
    this.infoExpanded = true;
    this.setDefaultPosition();
    this.animateCategoriesList();
  }

  toggleTop() {
    this.topExpanded = !this.topExpanded;
    this.animateTop();
  }

  toggle() {
    this.infoExpanded = !this.infoExpanded;
    this.animateData();
  }

  swipe(event: SwipeGestureEventData) {
    this.infoExpanded = event.direction !== SwipeDirection.down;

    this.animateData();
  }


  private animateCategoriesList() {
    const height = 80;

    elasticAnimation(1000,  height)
      .subscribe(curFrame => {
          if (!this.selectedCategory) {
            this.categoriesList.nativeElement.style.height = curFrame;
          } else {
            this.categoriesList.nativeElement.style.height = Math.abs(height - curFrame);
          }
        }
      );
  }
  private animateData() {
    const height = 200;

    elasticAnimation(1000,  height)
      .subscribe(curFrame => {
          if (this.infoExpanded) {
            this.scrollData.nativeElement.style.height = curFrame;
          } else {
            this.scrollData.nativeElement.style.height = Math.abs(height - curFrame);
          }
        }
      );
  }

  private animateTop() {
    const height = 60;

    elasticAnimation(1000,  height)
      .subscribe(curFrame => {
          if (this.topExpanded) {
            this.directoriesList.nativeElement.style.height = curFrame;
          } else {
            this.directoriesList.nativeElement.style.height = Math.abs(height - curFrame);
          }
        }
      );
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

}
