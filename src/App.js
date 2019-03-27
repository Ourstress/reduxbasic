import React from "react";
import TodoList from "./TodoList";
import "./App.css";
import { createStore } from "redux";

const listTodoItems = [
  { name: "task1", isCompleted: false },
  { name: "task2", isCompleted: true },
  { name: "task3", isCompleted: false }
];

const reducer = (
  state = {
    name: "Our TODOLIST App",
    joke: "Why did the cat cross the road?",
    jokeAnswer: "Because it saw something exciting on the other side."
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <div className="App">
      <p>{store.getState().name}</p>
      <TodoList todos={listTodoItems} />
      <p>Here's our joke of the day:</p>
      {/* modify the 2 paragraphs below to add the joke and jokeAnswer from state */}
      <p>Edits</p>
      <p>Edits</p>
    </div>
  );
}

/* 
Your task is to replace the paragraph elements marked "Edits" with the joke of the day and answer to the joke.
View demo at https://codesandbox.io/s/github/Ourstress/temp-test/tree/reduxLesson2/react

--Walkthrough--

What is Redux store?

Contains the state of our application. 
eg. all the todos in our todolist app
The only way to change the state is to dispatch an action.
eg. store.dispatch({type: "addTodo"})
Basically, state + action = new state.


How to setup the Redux store?

Use Redux's createStore(reducer) function.


What is store.getState()?

Allows access to state.
It is equal to the last value returned by the store's reducer.
Therefore, it is important for reducer to return state by default!


Recap of reducer

Reducer is a function that takes 2 parameters.
These 2 parameters are  1) previous state & 2) action
The reducer returns the new state or next state


Recap of action 

Actions are just javascript objects
As simple as this --> { type: "an action type" }
The property type is used to tell the reducer how it should proceed.


How does the reducer know what to do when it receives an action?

A reducer decides what to do based on a switch.
It checks what the action type is, and then handles it accordingly.
  switch (action.type) {
    default:
      return "hello there!";
  }

View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson1
*/
