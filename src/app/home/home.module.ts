import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryCardComponent } from './category-card';
import { CategoryDetailComponent } from './category-detail';
import { CategoryListComponent } from './category-list';
import { CategoryTaskComponent } from './category-task';
import { CategoryTasksListComponent } from './category-tasks-list';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CategoryCardComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    CategoryTaskComponent,
    CategoryTasksListComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})

export class HomeModule { }
