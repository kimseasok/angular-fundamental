import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-list',
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr />
      <div class="well hoverwell thumnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  event = {
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

  ngOnInit() {}
}
