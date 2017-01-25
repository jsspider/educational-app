import { ActionReducer, Action } from '@ngrx/store';

import { Category } from '../../models';
import { tasks } from './tasks.reducer';

export const categories: ActionReducer<Category[]> = (
    state: Category[] = [], action: Action) => {
  let index;
  let currCat;

  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        Object.assign({}, {
          id: new Date().getTime(),
          name: action.payload.name,
          tasks: [],
          completed: false,
          progress: 0
        })
      ];
    case 'COMPLETE_TASK':
      index = state.findIndex((cat) => {
        return cat.id === action.payload.categoryId;
      });
      currCat = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, currCat, {
          completed: action.payload.completed,
          percentage: action.payload.updatedPercentage,
          tasks: tasks(currCat.tasks, {
            type: 'COMPLETE_TASK',
            payload: {index: action.payload.taskIndex}
          })
        }),
        ...state.slice(index + 1)
      ];
    case 'REMOVE_TASK':
      index = state.findIndex((cat) => {
        return cat.id === action.payload.categoryId;
      });
      currCat = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, currCat, {
          completed: action.payload.completed,
          percentage: action.payload.updatedPercentage,
          tasks: tasks(currCat.tasks, {
            type: 'REMOVE_TASK',
            payload: {index: action.payload.taskIndex}
          })
        }),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};
