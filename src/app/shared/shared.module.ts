import { NgModule } from '@angular/core';

import { ChapterCardComponent } from './chapter-list/presentational/chapter-card.component';

@NgModule({
  imports: [],
  declarations: [
      ChapterCardComponent
  ],
  exports: [
      ChapterCardComponent
  ],
  providers: []
})

export class SharedModule { }