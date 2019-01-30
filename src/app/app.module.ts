import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/event-list.component';
import { EventsThumnailComponent } from './events/event-thumnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toast.service';
import { EventDetialComponent } from './events/event-detials/event-detail.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.components';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-detials/create-session.component';
import { SessionListComponent } from './events/event-detials/session-list.component';
import { CollasibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/event-detials/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal.component';
import { JQUERY_TOKEN } from './common/jquery.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-detials/upvote.component';
import { VoteService } from './events/event-detials/vote.Service';
import { LocationValidatorDirective } from './events/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './events/event-resolver.service';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventsThumnailComponent,
    NavBarComponent,
    EventDetialComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    Error404Component,
    CollasibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidatorDirective,
    DurationPipe
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    EventListResolver,
    EventResolver,
    AuthService,
    VoteService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirtyState) {
    return window.confirm(
      'You have not save this event, do you really want to cancel?'
    );
  }

  return true;
}
