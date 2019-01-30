import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './event.module';
import { EventService } from './event.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }

      .error input {
        background-color: #e3c3c6;
      }

      .error :: -webkit-input-placeholder {
        color: #999;
      }

      .error :: -moz-placeholder {
        color: #999;
      }
      .error: -moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateEventComponent {
  newEvent: any;
  isDirtyState = true;
  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirtyState = false;
      this.router.navigate(['events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
