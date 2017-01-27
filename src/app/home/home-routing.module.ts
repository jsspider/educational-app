import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CategoryDetailComponent } from './category-detail';
import {
  CategoryTaskEditComponent,
  CategoryTaskEditResolve
} from './category-task-edit';

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
                component: CategoryTaskEditComponent,
                data: { operationType: 'adding' },
                resolve: {
                  selCategory: CategoryTaskEditResolve
                }
              },
              {
                path: 'task/edit/:id',
                component: CategoryTaskEditComponent,
                data: { operationType: 'editing'},
                resolve: {
                  selCategory: CategoryTaskEditResolve
                }
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
