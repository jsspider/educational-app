import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HomeService } from './home.service';

@Component({
  template: `
    <h1>Categorized todo application</h1>
    <div class="col-sm-6">
      <ea-category-list [categories]="categories$ | async"></ea-category-list>
    </div>
    <div class="col-sm-6">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./home.scss'],
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit {
  public categories$;

  constructor(private store: Store, private homeService: HomeService) {}

  public ngOnInit() {
    this.categories$ = this.homeService.getCategories$();
  }
}
