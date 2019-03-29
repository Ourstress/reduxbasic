export const addTodo = inputValue => ({
  type: "addTodo",
  name: inputValue
});

export const updateTodo = todoName => ({
  type: "updateTodo",
  name: todoName
});
