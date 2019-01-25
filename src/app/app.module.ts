import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/event-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventAppComponent, EventsListComponent],
  bootstrap: [EventAppComponent]
})
export class AppModule {}
