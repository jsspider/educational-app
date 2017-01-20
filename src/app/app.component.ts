import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="container">
      <div class="col-sm-2">
        <ea-navigation></ea-navigation>
      </div>
      <div class="col-sm-10">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class AppComponent { }
