import { Injectable } from '@angular/core';

import { ChaptersApiService } from './core/services';

@Injectable()
export class AppState {
  constructor (private chaptersApiService: ChaptersApiService) {
    this.init();
  }

  private init() {
    // Populates localStorage chapters entry with mocked data if it's empty.
    if (!this.chaptersApiService.getChapters()) {
      this.populateDataSource();
    }
  }

  private populateDataSource() {
    this.chaptersApiService.fetchChapters().subscribe((res) => {
      this.chaptersApiService.saveChapters(res);
    });
  }
}
