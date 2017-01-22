import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ea-category-card',
  template: `
    <div class="category-card-wrapper clearfix" 
        [ngClass]="{'completed': category.completed,
          'in-progress': !category.completed}">
      <div class="col-sm-3 card-icon" [ngSwitch]="category.completed">  
        <i class="glyphicon glyphicon-ok" *ngSwitchCase="true"></i>
        <i class="glyphicon glyphicon-flash" *ngSwitchCase="false"></i>
      </div>
      <div class="col-sm-9 card-content">
        <h3>{{ category.name }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./category-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryCardComponent {
  @Input() public category = {};
}
