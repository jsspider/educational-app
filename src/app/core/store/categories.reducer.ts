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
    default:
      return state;
  }
}