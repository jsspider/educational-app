import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// import { CategoryListComponent } from './category-list';

@Component({
  template: `
    <h1>I am home component</h1>
    <div class="col-sm-6">
      <ea-category-list [categories]="categories$ | async"></ea-category-list>
    </div>
    <div class="col-sm-6"></div>
  `,
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
  public categories$;

  constructor(private store: Store) {}

  public ngOnInit() {
    this.categories$ = this.store.select('categories');
  }
}
