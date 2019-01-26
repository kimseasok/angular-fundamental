import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumnail',
  template: `
    <div class="well hoverwell thumnail" *ngIf="event">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div [ngSwitch]="event?.time">
      Time: {{ event.time }}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event.location">
        <span>Location: {{ event.location.address }}</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <div *ngIf="event.onlineOnly">
        <span>Online only: {{event.onlineOnly}}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .thumnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventsThumnailComponent {
  @Input() event: any;
  constructor() {}

  logFoo() {
    console.log('foo');
  }
}
