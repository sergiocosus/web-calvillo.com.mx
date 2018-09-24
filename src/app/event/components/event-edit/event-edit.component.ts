import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Event } from '@calvillo/api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SubscriptionManager } from '../../../shared/classes/subscription-manager';
import { NotifyService } from '../../../shared/services/notify.service';
import { CustomValidator } from '../../../shared/classes/custom-validator';
import { EventService } from '../../../../../projects/calvillo/api/src/services/event.service';
import { Category } from '../../../../../projects/calvillo/api/src/models/category.model';
import { CategoryService } from '../../../../../projects/calvillo/api/src/services/category.service';
import { EventFormService } from '../../services/event-form.service';
import { ImageResult } from 'ngx-image2dataurl';
import { SelectFromMapModalComponent } from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';
import { MatAutocompleteSelectedEvent, MatDialog } from '@angular/material';
import {
  debounceTime,
  distinctUntilChanged,
  flatMap,
  startWith
} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {
  @Input() event: Event;
  @Output() created = new EventEmitter;
  @Output() updated = new EventEmitter;

  src: string = null;
  form: FormGroup;

  subs = new SubscriptionManager();
  categories: Category[];
  categorySearchControl = new FormControl();
  categoriesFound$: Observable<Category[]>;

  constructor(private eventService: EventService,
              private categoryService: CategoryService,
              private fb: FormBuilder,
              private eventFormService: EventFormService,
              private notify: NotifyService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.form = this.eventFormService.createForm(this.event);
    console.log(this.form);

    this.subs.add = this.categoryService.getAllCached().subscribe(
      categories => this.categories = categories
    );

    this.initSearch();
  }

  selected(imageResult: ImageResult) {
    this.form.get('src').setValue(imageResult.dataURL);
    this.form.get('image').setValue(imageResult.dataURL.split(',')[1]);
  }

  submit() {
    CustomValidator.validateAllFields(this.form);
    if (this.form.invalid) {
      this.notify.error('Hay errores en el formulario');
      return;
    }

    const eventData = this.form.value;
    eventData.src = undefined;
    eventData.category_ids = eventData.categories.map(category => category.id);
    eventData.category = undefined;
    if (this.event) {
      this.updateEvent(eventData);
    } else {
      this.createEvent(eventData);
    }
  }

  private createEvent(eventData) {
    this.eventService.post(eventData).subscribe(
      event => {
        this.created.emit(event);
      },
      error => this.notify.serviceError(error)
    );
  }

  private updateEvent(eventData) {
    this.eventService.put(eventData).subscribe(
      event => {
        this.updated.emit(event);
      },
      error => this.notify.serviceError(error)
    );
  }

  openMapModal() {
    const dialog = this.dialog.open(SelectFromMapModalComponent);
    dialog.componentInstance.setCoords(
      +this.form.get('longitude').value,
      +this.form.get('latitude').value,
    );
    dialog.componentInstance.closed.subscribe(
      coordinates => this.setCoordinates(coordinates)
    );
  }

  setCoordinates(coordinates) {
    this.form.patchValue({
      longitude: coordinates.longitude,
      latitude: coordinates.latitude
    });
  }


  /**
   * Add resident to the people form control
   * @param {Person} category
   */
  removeCategory(category: Category): void {
    const index = this.form.get('categories').value.findIndex(person2 => person2.id === category.id);

    this.form.get('categories').value.splice(index, 1);
  }

  /**
   * Remove residet to the people form control
   * @param {MatAutocompleteSelectedEvent} event
   */
  addCategory(event: MatAutocompleteSelectedEvent) {
    const category: Category = event.option.value;

    const index = this.form.get('categories').value.findIndex(person2 => person2.id === category.id);
    if (index === -1) {
      this.form.get('categories').value.push(category);
      // The next line is not working so there is a fix in the template
      this.categorySearchControl.setValue('');
    }
  }

  /**
   * Initialize the search input for residentes
   */
  private initSearch() {
    this.categoriesFound$ = this.categorySearchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250),
      startWith(' '),
      flatMap(
        value => this.categoryService.getAll({search: value})
      )
    );
  }
}
