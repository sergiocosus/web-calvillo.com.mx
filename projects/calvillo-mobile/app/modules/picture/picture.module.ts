import { NgModule } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { PictureItemComponent } from '~/modules/picture/components/picture-item/picture-item.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [PictureItemComponent],
  exports: [PictureItemComponent],
})
export class PictureModule { }
