import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../home.service';

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

export class CategoryTaskEditComponent implements OnInit {
  public editingMode: boolean = false;
  public taskDescr: string = '';
  private categoryId: number;
  private taskIndex: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService) {}

  public ngOnInit() {
    this.categoryId = parseInt(this.route.snapshot.parent.params['id'], 10);

    if (this.route.snapshot.data['operationType'] === 'editing') {
      this.editingMode = true;

      this.route.params
        .subscribe((param) => {
          this.taskIndex = parseInt(param['id'], 10);

          this.homeService.getSelectedCategory$(this.categoryId)
            .subscribe((categories) => {
              this.taskDescr = categories[0].tasks[this.taskIndex].value;
            });
        });
    }
  }

  public onSubmit(form) {
    if (this.editingMode) {
      this.homeService.editTask(this.categoryId, this.taskIndex,
          form.value.description);
    } else {
      this.homeService.addTask(this.categoryId, form.value.description);
    }
    this.router.navigate(['/home/category', this.categoryId]);
  }

  public onCancelClick(e) {
    e.preventDefault();
    console.log(this.categoryId);
    this.router.navigate(['/home/category', this.categoryId]);
  }
}
