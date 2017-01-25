export const tasks = (state, action) => {
  let taskIndex;

  switch (action.type){
    case 'COMPLETE_TASK':
      taskIndex = action.payload.index;

      return [
        ...state.slice(0, taskIndex),
        Object.assign({}, state[taskIndex], {completed: true}),
        ...state.slice(taskIndex + 1)
      ];
    case 'REMOVE_TASK':
      taskIndex = action.payload.index;

      return [
        ...state.slice(0, taskIndex),
        ...state.slice(taskIndex + 1)
      ];
    default:
      return state;
  }
};
