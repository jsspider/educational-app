import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { CategoryCardComponent } from '../category-card';

@Component({
  selector: 'ea-category-list',
  template: `
    <ea-category-card *ngFor="let category of categories"
        [category]="category"></ea-category-card>
  `,
  styleUrls: ['./category-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryListComponent {
  @Input() public categories = [];
}
