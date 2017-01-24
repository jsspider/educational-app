export const tasks = (state, action) => {
  switch (action.type){
    case 'COMPLETE_TASK':
      let taskIndex = action.payload.index;

      return [
        ...state.slice(0, taskIndex),
        Object.assign({}, state[taskIndex], {completed: true}),
        ...state.slice(taskIndex + 1)
      ];
    default:
      return state;
  }
};
