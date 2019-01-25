import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/event-list.component';
import { EventsThumnailComponent } from './events/event-thumnail.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventAppComponent, EventsListComponent, EventsThumnailComponent],
  bootstrap: [EventAppComponent]
})
export class AppModule {}
