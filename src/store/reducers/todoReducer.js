const initState = {
  list: [],
  completedId: null,
};
export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
}
