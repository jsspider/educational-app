import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GenericHttpService } from './generic-http.service';
import { GenericLocalStorageService } from './generic-localStorage.service';

@Injectable()
export class CategoryApiService {
  private categoriesKey: string = 'ea-categories';
  private mockedCategoriesUrl: string = 'assets/mock-data/mock-data.json';

  constructor (
      private httpService: GenericHttpService,
      private localStorageService: GenericLocalStorageService
  ) {}

  public getCategories() {
    return this.localStorageService.getItem(this.categoriesKey);
  }

  public saveCategories(data): void {
    this.localStorageService.setItem(this.categoriesKey, data);
  }

  public fetchCategories(): Observable<Object[]> {
    return this.httpService.get(this.mockedCategoriesUrl);
  }
}
