import React, { useState } from "react";
import { connect } from "react-redux";

function TodoList(props) {
  const [todoValue, setTodoValue] = useState("");
  return (
    <div className="App">
      <h2>Our Todolist App</h2>
      {props.todos.map(todo => (
        <p key={todo.name}>
          {todo.name}
          <input type="checkbox" checked={todo.isCompleted} />
        </p>
      ))}
      <form>
        <input value={todoValue} onChange={e => setTodoValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
