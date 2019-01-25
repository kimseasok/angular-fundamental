import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumnail',
  template: `
    <div class="well hoverwell thumnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span> <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <button class="btn btn-primary">
        Click Me
      </button>
    </div>
  `
})
export class EventsThumnailComponent {
  @Input() event: any;
  constructor() {}

  logFoo() {
    console.log('foo');

  }
}
