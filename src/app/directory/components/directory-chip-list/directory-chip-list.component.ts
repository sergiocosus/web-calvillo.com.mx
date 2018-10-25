import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {
  debounceTime,
  distinctUntilChanged,
  flatMap,
  startWith
} from 'rxjs/operators';
import { Directory, DirectoryService } from '@calvillo/api';

@Component({
  selector: 'app-directory-chip-list',
  templateUrl: './directory-chip-list.component.html',
  styleUrls: ['./directory-chip-list.component.scss']
})
export class DirectoryChipListComponent implements OnInit {
  @Input() fieldControl;

  directoriesFound$: Observable<Directory[]>;
  directorySearchControl = new FormControl();

  constructor(private directoryService: DirectoryService) {
  }

  ngOnInit() {
    this.initSearch();
  }

  /**
   * Add directory form control
   * @param {Directory} directory
   */
  removeDirectory(directory: Directory): void {
    const index = this.fieldControl.get('directorys')
      .value.findIndex(directory2 => directory2.id === directory.id);

    this.fieldControl.value.splice(index, 1);
  }

  /**
   * Remove directory form control
   * @param {MatAutocompleteSelectedEvent} event
   */
  addDirectory(event: MatAutocompleteSelectedEvent) {
    const directory: Directory = event.option.value;

    const index = this.fieldControl.value.findIndex(person2 => person2.id === directory.id);
    if (index === -1) {
      this.fieldControl.value.push(directory);
      // The next line is not working so there is a fix in the template
      this.directorySearchControl.setValue('');
    }
  }

  /**
   * Initialize the search input for categories
   */
  private initSearch() {
    this.directoriesFound$ = this.directorySearchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250),
      startWith(' '),
      flatMap(
        value => this.directoryService.getAll({search: value, limit: 30})
      )
    );
  }
}
