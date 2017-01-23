import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeService } from '../home.service';
import { slideRouteAnimation } from './slide-animation';

@Component({
  animations: [slideRouteAnimation],
  template: `
    <h2>{{ selectedCategory$.name }} tasks</h2>
    <div class="close"
        routerLink="/home">
      <i class="glyphicon glyphicon-remove"></i>
    </div>
    <ul class="list-group">
      <li class="list-group-item"
          *ngFor="let task of selectedCategory$.tasks">{{ task.value }}</li>
    </ul>
  `,
  styleUrls: ['./category-detail.scss']
})

export class CategoryDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  public selectedCategory$: Object;

  constructor (
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  public ngOnInit() {
    this.route.params
              .subscribe((param) => {
                let categoryId = parseInt(param.id, 10);

                this.homeService.getSelectedCategory$(categoryId)
                                .subscribe((categories) => {
                                  this.selectedCategory$ = categories[0];
                                });
              });
  }
}
