import React, { useState } from "react";

export default function InputForm(props) {
  const [todoValue, setTodoValue] = useState("");
  return (
    <form
      onSubmit={e => {
        // dispatch an action here
        props.addTodo(todoValue);
        setTodoValue("");
        e.preventDefault();
      }}
    >
      <input
        value={todoValue}
        placeholder="Add todo"
        onChange={e => setTodoValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
