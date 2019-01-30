import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'upvote',
  template: `
    <div class="voting-container pointable" (click)="onClick()">
      <div class="well voting-widget">
        <div class="voting-button">
          <i
            class="glyphicon glyphicon-heart"
            [style.color]="iconColor"
          ></i>
        </div>
        <div class="badge bage-inverse voting-count">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}
