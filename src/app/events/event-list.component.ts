import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumnail #thumnail [event]="event1"></event-thumnail>
      <h3>{{thumnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumnail.logFoo()">LogFoo</button>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connection',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    image: '/assets/images/angularconnection-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  constructor() {}
}
