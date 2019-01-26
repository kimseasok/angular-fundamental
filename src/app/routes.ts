import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list.component';
import { EventDetialComponent } from './events/event-detials/event-detail.component';
import { CreateEventComponent } from './events/shared/create-event.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetialComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];
