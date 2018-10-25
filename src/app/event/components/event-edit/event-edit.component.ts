import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, CategoryService, Event, EventService } from '@calvillo/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubscriptionManager } from '../../../shared/classes/subscription-manager';
import { NotifyService } from '../../../shared/services/notify.service';
import { CustomValidator } from '../../../shared/classes/custom-validator';
import { EventFormService } from '../../services/event-form.service';
import { ImageResult } from 'ngx-image2dataurl';
import { SelectFromMapModalComponent } from '../../../maps/components/select-from-map-modal/select-from-map-modal.component';
import { MatDialog } from '@angular/material';

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
    delete eventData.src;
    delete eventData.picture;

    console.log(eventData);


    eventData.category_ids = eventData.categories.map(category => category.id);
    eventData.picture_ids = eventData.pictures.map(picture => picture.id);
    eventData.directory_ids = eventData.directories.map(directory => directory.id);

    delete eventData.categories;
    delete eventData.pictures;
    delete eventData.directories;

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
    this.dialog.open(SelectFromMapModalComponent, {
      data: {
        longitude: +this.form.get('longitude').value,
        latitude: +this.form.get('latitude').value
      }}).afterClosed().subscribe(
      coordinates => this.form.patchValue(coordinates)
    );
  }


}
