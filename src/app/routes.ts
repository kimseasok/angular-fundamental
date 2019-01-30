import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list.component';
import { EventDetialComponent } from './events/event-detials/event-detail.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.components';
import { EventListResolver } from './events/event-list-resolver.service';
import { CreateSessionComponent } from './events/event-detials/create-session.component';
import { EventResolver } from './events/event-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetialComponent,
    resolve: {event: EventResolver}
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];
