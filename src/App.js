import React from "react";
import TodoList from "./TodoList";
import "./App.css";

const listTodoItems = [
  { name: "task1", isCompleted: false },
  { name: "task2", isCompleted: true },
  { name: "task3", isCompleted: false }
];

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return "hello there!";
  }
};

export default function App() {
  return (
    <div className="App">
      <TodoList todos={listTodoItems} />
      {/* the paragraph below is added just for testing - you can ignore it */}
      <p>{reducer("initial state", { type: "an action type" })}</p>
    </div>
  );
}

/* 
Your task is to get the reducer to return the previous state.
View demo at https://codesandbox.io/s/github/Ourstress/temp-test/tree/reduxLesson1/react

--Walkthrough--

The first thing we will cover about Redux is about reducers.
If you know how reducers work, you are very close to understanding Redux!

Now, the job of a reducer is to handle changes in application state in response to actions.
Something like when you add a todo ("action") to your todolist, you want your app to save it in its state.

Therefore, to do its job, the reducer is a function that takes 2 parameters.
These 2 parameters are  1) previous state & 2) action

Based on the previous state (eg. you got 3 todos in your app's state already) and action (add a new todo),
the reducer returns the new state or next state (ie. 4 todos now) 

In Redux, actions come in different flavours or types. 
Actions are just javascript objects that have properties known as type
For example, an action can be as simple as this --> { type: "an action type" }
The property type is used to tell the reducer how it should proceed.

How does the reducer know what to do when it receives an action?
A reducer decides what to do based on a switch.
It checks what the action type is, and then handles it accordingly.
  switch (action.type) {
    default:
      return "hello there!";
  }

In the switch above, whatever the action type is, the reducer also returns "hello there"
Your task is to get the reducer to return the previous state.
View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson1
*/
