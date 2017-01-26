import { ActionReducer, Action } from '@ngrx/store';

import { Category } from '../../models';
import { Task } from '../../models';
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
        Object.assign({}, currCat, getCategoryProgress(
          tasks(currCat.tasks, {
            type: 'COMPLETE_TASK',
            payload: {index: action.payload.taskIndex}
          })
        )),
        ...state.slice(index + 1)
      ];
    case 'REMOVE_TASK':
      index = state.findIndex((cat) => {
        return cat.id === action.payload.categoryId;
      });
      currCat = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, currCat, getCategoryProgress(
          tasks(currCat.tasks, {
            type: 'REMOVE_TASK',
            payload: {index: action.payload.taskIndex}
          })
        )),
        ...state.slice(index + 1)
      ];
    case 'ADD_TASK':
      index = state.findIndex((cat) => {
        return cat.id === action.payload.categoryId;
      });
      currCat = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, currCat, getCategoryProgress(
          tasks(currCat.tasks, {
            type: 'ADD_TASK',
            payload: {taskDescr: action.payload.taskDescr}
          })
        )),
        ...state.slice(index + 1)
      ]
    default:
      return state;
  }
};

function getCategoryProgress(updatedTasks: Task[]) {
  return {
    tasks: updatedTasks,
    completed: updatedTasks.every((task) => task.completed),
    percentage: updatedTasks.reduce((acc, curr, index, array) => {
      acc = curr.completed ? acc + 1 : acc;

      // Return total completion percentage when iterating over last item.
      if (index === array.length - 1) {
        return Math.round(acc / array.length * 100);
      }
      return acc;
    }, 0)
  };
}
