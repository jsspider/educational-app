import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { combineReducers, INITIAL_STATE } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { categories } from './categories.reducer';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    StoreModule.provideStore({ categories })
  ],
  declarations: [],
  exports: [],
  providers: [
    StoreService,
    {
      provide: INITIAL_STATE,
      useFactory(storeService: StoreService) {
        return {categories: storeService.getInitialState()};
      },
      deps: [StoreService]
    }
  ]
})
export class CoreStoreModule {};
