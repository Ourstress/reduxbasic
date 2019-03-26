import React, { useState } from "react";

function TodoList(props) {
  const [todoValue, setTodoValue] = useState("");
  return (
    <div>
      <header>Todolist</header>
      {props.todos.map(function(todo) {
        return (
          <p key={todo.name}>
            {todo.name}
            <input type="checkbox" />
          </p>
        );
      })}
      <form>
        <input value={todoValue} onChange={e => setTodoValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoList;
