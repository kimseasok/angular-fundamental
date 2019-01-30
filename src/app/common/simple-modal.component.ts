import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  inject,
  Inject
} from '@angular/core';
import { $ } from 'protractor';
import { JQUERY_TOKEN } from './jquery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="simple-modal" class="modal fade" index="-a" #modalContainer>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
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
  @ViewChild('modalContainer') containerEl: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {}

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
