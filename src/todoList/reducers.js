const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        todos: [...state.todos, { name: action.name, isCompleted: false }]
      };
    case "updateTodo":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.name === action.name) {
            return { name: action.name, isCompleted: action.isCompleted };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default reducer;
