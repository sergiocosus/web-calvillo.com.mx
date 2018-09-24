import { NgModule } from '@angular/core';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { EventEditDialogComponent } from './components/event-edit-dialog/event-edit-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { MatAutocompleteModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    ImageToDataUrlModule,
    MatAutocompleteModule,
    MatChipsModule
  ],
  declarations: [
    EventEditComponent,
    EventEditDialogComponent
  ],
  entryComponents: [
    EventEditDialogComponent
  ],
  exports: [
    EventEditComponent,
    EventEditDialogComponent
  ]
})
export class EventModule { }
