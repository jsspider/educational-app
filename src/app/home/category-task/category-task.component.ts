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
      </div>
    </li>
  `,
  styleUrls: ['./category-task.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryTaskComponent {
  @Input() public task = {};
  @Output() public completed = new EventEmitter();

  public onDoneClick() {
    this.completed.emit();
  }
}
