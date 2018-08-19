import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { PictureItemComponent } from '~/modules/picture/components/picture-item/picture-item.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [PictureItemComponent],
  exports: [PictureItemComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PictureModule { }
