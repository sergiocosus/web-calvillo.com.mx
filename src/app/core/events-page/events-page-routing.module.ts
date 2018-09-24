import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page/events-page.component';


export const eventsPageRouting: Routes = [
  {
    path: '',
    component: EventsPageComponent,
    children: [
      {
        path: ':event_slug',
        component: EventsPageComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(eventsPageRouting)],
  exports: [RouterModule]
})
export class EventsPageRoutingModule {
}

