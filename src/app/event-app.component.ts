import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-app',
  template: '<event-list></event-list>'
})
export class EventAppComponent {
  title = 'App';
}
