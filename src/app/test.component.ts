/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'test',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [],
  template: `
    <h1>I am test component</h1>
  `
})
export class TestComponent {}