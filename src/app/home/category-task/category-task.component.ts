import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ea-category-task',
  template: `
    <li class="list-group-item clearfix">
      <h4 class="col-sm-8">{{ task.value }}</h4>
      <div class="col-sm-4 btn-group">
        <button class="btn btn-success"
            *ngIf="!task.completed"
            (click)="onDoneClick()">Done</button>
        <button class="btn btn-danger"
            (click)="onRemoveClick()">Remove</button>
      </div>
    </li>
  `,
  styleUrls: ['./category-task.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryTaskComponent {
  @Input() public task = {};
  @Output() public completed = new EventEmitter();
  @Output() public removed = new EventEmitter();

  public onDoneClick() {
    this.completed.emit();
  }

  public onRemoveClick() {
    this.removed.emit();
  }
}
