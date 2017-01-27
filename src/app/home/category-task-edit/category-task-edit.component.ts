import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../home.service';
import { Category } from '../../core/models';

@Component({
  template: `
    <form (ngSubmit)="onSubmit(form)"
          #form="ngForm">
      <div class="form-group">
        <label for="task-description" [ngSwitch]="editingMode">
          <span *ngSwitchCase="true">Edit task</span>
          <span *ngSwitchDefault>Add new task</span>
        </label>
        <input type="text"
            class="form-control"
            name="description"
            id="task-description"
            [ngModel]="taskDescr"
            required>
        <div class="action-buttons">
          <button class="btn btn-success">Save</button>
          <button class="btn btn-danger"
              (click)="onCancelClick($event)">Cancel</button>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./category-task-edit.scss']
})

export class CategoryTaskEditComponent implements OnInit, OnDestroy {
  public editingMode: boolean;
  public taskDescr: string = '';
  private taskIndex: number;
  private selCategory: Category;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService) {}

  public ngOnInit() {
    this.editingMode = this.route.snapshot.data['operationType'] === 'editing';
    this.selCategory = this.route.snapshot.data['selCategory'][0];

    this.sub = this.route.params.subscribe((param) => {
      this.taskIndex = parseInt(param['id'], 10);

      if (this.route.snapshot.data['operationType'] === 'editing') {
        this.taskDescr = this.selCategory.tasks[this.taskIndex].value;
      }
    });
  }

  public onSubmit(form) {
    if (this.editingMode) {
      this.homeService.editTask(this.selCategory.id, this.taskIndex,
          form.value.description);
    } else {
      this.homeService.addTask(this.selCategory.id, form.value.description);
    }
    this.router.navigate(['/home/category', this.selCategory.id]);
  }

  public onCancelClick(event) {
    event.preventDefault();
    this.router.navigate(['/home/category', this.selCategory.id]);
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
