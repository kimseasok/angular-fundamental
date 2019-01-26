import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventAppComponent {
  title = 'App';
}
