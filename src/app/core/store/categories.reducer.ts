import { tasks } from './tasks.reducer';

export const categories = (state = [], action) => {
  switch (action.type){
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
      const index = state.findIndex((cat) => {
        return cat.id === action.payload.categoryId;
      });
      const currCat = state[index];

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
    default:
      return state;
  }
};
