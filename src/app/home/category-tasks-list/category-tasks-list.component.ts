import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { HomeService } from '../home.service';


@Component({
  selector: 'ea-category-tasks-list',
  template: `
    <ul class="list-group">
      <ea-category-task
          *ngFor="let task of currCategory.tasks; let i = index"
          [task]="task"
          (completed)="onTaskCompletion(i)"></ea-category-task>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryTasksListComponent {
  @Input() public currCategory = {};

  constructor(private homeService: HomeService) {}

  public onTaskCompletion(taskIndex) {
    this.homeService.completeTask(this.currCategory, taskIndex);
  }
}