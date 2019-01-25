import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/event-list.component';
import { EventsThumnailComponent } from './events/event-thumnail.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventAppComponent, EventsListComponent, EventsThumnailComponent, NavBarComponent],
  bootstrap: [EventAppComponent]
})
export class AppModule {}
