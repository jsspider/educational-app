import { Component } from '@angular/core';

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

export class AppComponent { }
