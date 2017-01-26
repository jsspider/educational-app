import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CategoryDetailComponent } from './category-detail';
import { CategoryTaskEditComponent } from './category-task-edit';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'category/:id',
            component: CategoryDetailComponent,
            children: [
              {
                path: 'task/new',
                component: CategoryTaskEditComponent
              }
            ]
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
