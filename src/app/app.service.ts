import { Injectable } from '@angular/core';

import { CategoryApiService } from './core/services';

@Injectable()
export class AppService {
  constructor (private categoryApiService: CategoryApiService) {
    this.init();
  }

  private init() {
    // Populates localStorage categories entry with mocked data if it's empty.
    if (!this.categoryApiService.getCategories()) {
      this.populateDataSource();
    }
  }

  private populateDataSource() {
    this.categoryApiService.fetchCategories().subscribe((res) => {
      this.categoryApiService.saveCategories(res);
    });
  }
}
