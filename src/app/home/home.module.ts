import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryListComponent } from './category-list';
import { CategoryCardComponent } from './category-card';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CategoryListComponent,
    CategoryCardComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})

export class HomeModule { }
