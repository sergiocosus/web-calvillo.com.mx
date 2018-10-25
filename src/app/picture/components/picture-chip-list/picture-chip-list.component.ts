import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture, PictureService } from '@calvillo/api';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {
  debounceTime,
  distinctUntilChanged,
  flatMap,
  startWith
} from 'rxjs/operators';

@Component({
  selector: 'app-picture-chip-list',
  templateUrl: './picture-chip-list.component.html',
  styleUrls: ['./picture-chip-list.component.scss']
})
export class PictureChipListComponent implements OnInit {
  @Input() fieldControl;

  picturesFound$: Observable<Picture[]>;
  pictureSearchControl = new FormControl();

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
    this.initSearch();
  }

  /**
   * Add picture form control
   * @param {Picture} picture
   */
  removePicture(picture: Picture): void {
    const index = this.fieldControl.get('pictures')
      .value.findIndex(picture2 => picture2.id === picture.id);

    this.fieldControl.value.splice(index, 1);
  }

  /**
   * Remove picture form control
   * @param {MatAutocompleteSelectedEvent} event
   */
  addPicture(event: MatAutocompleteSelectedEvent) {
    const picture: Picture = event.option.value;

    const index = this.fieldControl.value.findIndex(person2 => person2.id === picture.id);
    if (index === -1) {
      this.fieldControl.value.push(picture);
      // The next line is not working so there is a fix in the template
      this.pictureSearchControl.setValue('');
    }
  }

  /**
   * Initialize the search input for categories
   */
  private initSearch() {
    this.picturesFound$ = this.pictureSearchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250),
      startWith(' '),
      flatMap(
        value => this.pictureService.getAll({search: value, limit: 30})
      )
    );
  }
}
