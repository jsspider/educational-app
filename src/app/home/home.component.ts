import { Component } from '@angular/core';

@Component({
  template: `
    <h1>I am home component</h1>
    <div class="col-sm-6">
      <ea-chapter-card></ea-chapter-card>
    </div>
    <div class="col-sm-6"></div>
  `,
  styleUrls: ['./home.scss']
})

export class HomeComponent {

  constructor() {}
}
