import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="row">
      <div class="col-sm-3">
        <ea-navigation></ea-navigation>
      </div>
      <div class="col-sm-9">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class AppComponent {
  constructor (private appService: AppService) {}
}
