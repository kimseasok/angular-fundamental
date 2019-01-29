import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4><ng-content select=".session-title"></ng-content></h4>
      <ng-content select=".session-body" *ngIf="visible"></ng-content>
    </div>
  `
})
export class CollasibleWellComponent {
  @Input() title: string;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
