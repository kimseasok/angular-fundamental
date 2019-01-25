import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventAppComponent],
  bootstrap: [EventAppComponent]
})
export class AppModule {}
