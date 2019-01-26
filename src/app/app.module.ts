import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/event-list.component';
import { EventsThumnailComponent } from './events/event-thumnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toast.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventAppComponent, EventsListComponent, EventsThumnailComponent, NavBarComponent],
  providers: [EventService, ToastrService],
  bootstrap: [EventAppComponent]
})
export class AppModule {}
