export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: {
    todo,
  },
});

export const setStatus = (status) => ({
  type: "SET_STATUS",
  payload: {
    status,
  },
});
