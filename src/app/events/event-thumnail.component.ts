import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.module';

@Component({
  selector: 'event-thumnail',
  template: `
    <div class="well hoverwell thumnail" *ngIf="event" [routerLink]="['/events', event.id]">
      <h2>{{ event.name | uppercase }}</h2>
      <div>Date: {{ event.date }}</div>
      <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">
        Time: {{ event.time }}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event.location" [ngClass]="{green: event?.location.country === 'USA', 'bold-text': event?.location.country === 'USA'}">
        <span>Location: {{ event.location.address }}</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <div *ngIf="event.onlineUrl">
        <span>Online only: {{ event.onlineUrl }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
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
  @Input() event: IEvent;
}
