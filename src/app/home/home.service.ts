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
    const detailViewRegExp = /^\/home\/category\/\d+/;

    return detailViewRegExp.test(url);
  }

  public completeTask(categoryId, taskIndex) {
    this.store.dispatch({type: 'COMPLETE_TASK', payload: {
      categoryId,
      taskIndex
    }});
  }

  public removeTask(categoryId, taskIndex) {
    this.store.dispatch({type: 'REMOVE_TASK', payload: {
      categoryId,
      taskIndex
    }});
  }

  public addTask(categoryId, taskDescr) {
    this.store.dispatch({type: 'ADD_TASK', payload: {
      categoryId,
      taskDescr
    }});
  }

  public editTask(categoryId, taskIndex, taskDescr) {
    this.store.dispatch({type: 'EDIT_TASK', payload: {
      categoryId,
      taskIndex,
      taskDescr
    }});
  }
}
