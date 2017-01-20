import { Component } from '@angular/core';

@Component({
  selector: 'ea-chapter-card',
  template: `
    <div class="chapter-card-wrapper clearfix completed">
      <div class="col-sm-3 card-icon">
        <i class="glyphicon glyphicon-ok"></i>
      </div>
      <div class="col-sm-9 card-content">
        <h3>Some chapter title</h3>
        <p>Some chapter description</p>
      </div>
    </div>
  `,
  styleUrls: ['./chapter-card.scss']
})

export class ChapterCardComponent { }
