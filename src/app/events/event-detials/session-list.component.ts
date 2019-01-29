import { Component, Input } from '@angular/core';
import { ISession } from '../shared/event.module';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent {
  @Input() sessions: ISession[];
}
