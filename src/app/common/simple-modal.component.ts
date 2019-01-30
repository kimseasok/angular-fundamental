import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="simple-modal" class="modal fade" index="-a">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body"><ng-content></ng-content></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-body {
        padding: 0;
      }
    `
  ]
})
export class SimpleModalComponent {
  @Input() title: string;
}
