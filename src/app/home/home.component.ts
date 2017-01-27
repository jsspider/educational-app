import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HomeService } from './home.service';

@Component({
  template: `
    <h1>Categorized todo application</h1>
    <div [ngClass]="detailViewActive ? 'col-sm-6' : 'col-sm-12'">
      <ea-category-list [categories]="categories$ | async"></ea-category-list>
    </div>
    <div [class.col-sm-6]="detailViewActive">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
  public categories$;
  public detailViewActive: boolean = false;

  constructor(
    private store: Store,
    private router: Router,
    private homeService: HomeService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.detailViewActive = this.homeService.isDetailView(e.url);
      }
    });
  }

  public ngOnInit() {
    this.categories$ = this.homeService.getCategories$();
  }
}
