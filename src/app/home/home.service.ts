import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class HomeService {
  private categories$ = this.store.select('categories');

  constructor(private store: Store) {}

  public getCategories$() {
    return this.categories$;
  }

  public getSelectedCategory$(id: number) {
    return this.categories$
               .map((cat) => {
                 return cat.filter((cat) => cat.id === id)
               });
  }
}