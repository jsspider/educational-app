import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryCardComponent } from './category-card';
import { CategoryDetailComponent } from './category-detail';
import { CategoryListComponent } from './category-list';
import { CategoryTaskComponent } from './category-task';
import {
  CategoryTaskEditComponent,
  CategoryTaskEditResolve
} from './category-task-edit';
import { CategoryTasksListComponent } from './category-tasks-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CategoryCardComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    CategoryTaskComponent,
    CategoryTaskEditComponent,
    CategoryTasksListComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    CategoryTaskEditResolve,
    HomeService
  ]
})

export class HomeModule { }
