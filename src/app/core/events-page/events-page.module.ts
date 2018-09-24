import { NgModule } from '@angular/core';
import { EventsPageComponent } from './events-page/events-page.component';
import { SharedModule } from '../../shared/shared.module';
import { EventModule } from '../../event/event.module';
import { EventsPageRoutingModule } from './events-page-routing.module';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import {
  MatButtonToggleModule,
  MatChipsModule,
  MatListModule
} from '@angular/material';
import { AuthModule } from '../../auth/auth.module';

@NgModule({
  imports: [
    SharedModule,
    EventsPageRoutingModule,
    EventModule,
    CalendarModule,
    MatListModule,
    MatButtonToggleModule,
    MatChipsModule,
    AuthModule,
  ],
  declarations: [EventsPageComponent, CalendarHeaderComponent]
})
export class EventsPageModule { }
