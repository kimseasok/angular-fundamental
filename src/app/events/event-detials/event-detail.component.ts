import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.module';

@Component({
  templateUrl: './event-detial.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }

      a {
        cursor: pointer = 'all';
      }
    `
  ]
})
export class EventDetialComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    let nextId: number = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id)
    );

    session.id = nextId = 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }
}
