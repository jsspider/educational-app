import { Injectable } from '@angular/core';

import { ChaptersApiService } from './core/services';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  constructor (private chaptersApiService: ChaptersApiService) {
    this.init();
  }

  // already return a clone of the current state
  public get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }

  private init() {
    // Populates localStorage chapters entry with mocked data if it's empty.
    if (!this.chaptersApiService.getChapters()) {
      this.chaptersApiService.fetchChapters().subscribe((res) => {
        this.chaptersApiService.saveChapters(res);
      });
    }
  }
}
