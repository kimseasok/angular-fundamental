import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <div>
      <h1>New Event</h1>
      <hr />
      <div class="col-md-6">
        <h3>[Create Event form will go here]</h3>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">
          Cancel
        </button>
      </div>
    </div>
  `
})
export class CreateEventComponent {
  isDirtyState = true;
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/events']);
  }
}
