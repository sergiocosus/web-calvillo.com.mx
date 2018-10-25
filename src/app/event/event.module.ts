import { NgModule } from '@angular/core';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { EventEditDialogComponent } from './components/event-edit-dialog/event-edit-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { CategoryModule } from '../category/category.module';
import { PictureModule } from '../picture/picture.module';
import { DirectoryModule } from '../directory/directory.module';

@NgModule({
  imports: [
    SharedModule,
    ImageToDataUrlModule,
    CategoryModule,
    PictureModule,
    DirectoryModule,
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
