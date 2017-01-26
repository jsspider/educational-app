import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../home.service';

@Component({
  template: `
    <form (ngSubmit)="onSubmit(form)"
          #form="ngForm">
      <div class="form-group">
        <label for="task-description">Add new task</label>
        <input type="text"
            class="form-control"
            name="description"
            id="task-description"
            ngModel
            required>
        <div class="action-buttons">
          <button class="btn btn-success">Save</button>
          <button class="btn btn-danger"
              (click)="onCancelClick()">Cancel</button>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./category-task-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryTaskEditComponent implements OnInit {
  private categoryId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService) {}

  public ngOnInit() {
    this.categoryId = parseInt(this.route.snapshot.parent.params['id'], 10);
  }

  public onSubmit(form) {
    this.homeService.addTask(this.categoryId, form.value.description);
    this.router.navigate(['/home/category', this.categoryId]);
  }

  public onCancelClick() {
    this.router.navigate(['/home/category', this.categoryId]);
  }
}
