import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CategoryApiService } from '../core/services';

@Injectable()
export class HomeService {
  private categories$ = this.store.select('categories');

  constructor(
    private store: Store,
    private categoryApiService: CategoryApiService
  ) {
    // TODO: Needs rethinking when and where we should interact with the db.
    this.categories$.subscribe((cat) => {
      this.categoryApiService.saveCategories(cat);
    })
  }

  public getCategories$() {
    return this.categories$;
  }

  // TODO: Consider simplifying it by using one of RxJS functions.
  public getSelectedCategory$(id: number) {
    return this.categories$
               .map((cat) => {
                 return cat.filter((cat) => cat.id === id)
               });
  }

  public isDetailView(url: string) {
    const detailViewRegExp = /^\/home\/category\/\d+$/;

    return detailViewRegExp.test(url);
  }

  public completeTask(category, taskIndex) {
    const updatedPercentage = this.getUpdatedPercentage(category, taskIndex,
        'COMPLETION');
    const completed = updatedPercentage === 100;

    this.store.dispatch({type: 'COMPLETE_TASK', payload: {
      categoryId : category.id,
      completed,
      taskIndex,
      updatedPercentage
    }});
  }

  public removeTask(category, taskIndex) {
    const updatedPercentage = this.getUpdatedPercentage(category, taskIndex,
        'REMOVAL');
    const completed = updatedPercentage === 100;

    this.store.dispatch({type: 'REMOVE_TASK', payload: {
      categoryId : category.id,
      completed,
      taskIndex,
      updatedPercentage
    }});
  }

  private getUpdatedPercentage(category, taskIndex, operationType) {
    const currCompletedTasksCount = category.tasks.filter((task) => {
      return task.completed;
    }).length;
    let updCompletedTasksCount;

    switch (operationType) {
      case 'COMPLETION':
        updCompletedTasksCount = currCompletedTasksCount + 1;

        return Math.round(updCompletedTasksCount /
            category.tasks.length * 100);
      case 'REMOVAL':
        updCompletedTasksCount = category.tasks[taskIndex].completed ?
            currCompletedTasksCount - 1 :
            currCompletedTasksCount;

        return Math.round((updCompletedTasksCount) /
            (category.tasks.length - 1) * 100) || 0;
      default:
        return category.percentage;
    }
  }
}
