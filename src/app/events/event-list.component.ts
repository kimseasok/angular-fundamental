import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toast.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumnail (click)="handleThumnailClick(event.name)" [event]="event"></event-thumnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumnailClick(eventName) {
    this.toastr.success(eventName, 'clicked');
  }
}
