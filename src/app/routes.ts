import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list.component';
import { EventDetialComponent } from './events/event-detials/event-detail.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.components';
import { EventRouteActivator } from './events/event-detials/event-route-activator.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetialComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];
