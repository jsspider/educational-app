import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../home.service';


@Component({
  selector: 'ea-category-tasks-list',
  template: `
    <ul class="list-group">
      <ea-category-task
          *ngFor="let task of currCategory.tasks; let i = index"
          [task]="task"
          (dblclick)="initTaskEditing(i)"
          (completed)="onTaskCompletion(i)"
          (removed)="onTaskRemoved(i)"></ea-category-task>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryTasksListComponent {
  @Input() public currCategory = {};

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router) {}

  public onTaskCompletion(taskIndex) {
    this.homeService.completeTask(this.currCategory['id'], taskIndex);
  }

  public onTaskRemoved(taskIndex) {
    this.homeService.removeTask(this.currCategory['id'], taskIndex);
  }

  public initTaskEditing(i) {
    this.router.navigate(['task/edit/', i], { relativeTo: this.route });
  }
}