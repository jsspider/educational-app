import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="row">
      <ea-navigation></ea-navigation>
      <div class="col-sm-10 col-sm-offset-2">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class AppComponent {
  constructor (private appService: AppService) {}
}
