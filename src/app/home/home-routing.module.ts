import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CategoryDetailComponent } from './category-detail';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: 'category/:id', component: CategoryDetailComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
