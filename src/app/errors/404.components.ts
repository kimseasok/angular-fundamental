import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">
      Opp!.. Page not found!...
    </h1>
  `,
  styles: [
    `
      .errorMessage {
        margin-top: 150px;
        font-size: 94px;
        text-algin: center;
      }
    `
  ]
})
export class Error404Component {
  constructor() {}
}
