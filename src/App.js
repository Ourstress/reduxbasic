import React, { useState } from "react";
import "./App.css";
import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    // Do uncomment the 2 statements below and implement addTodo
    // case "addTodo":
    // return Object.assign(...);
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

const store = createStore(reducer, {
  todos: [
    { name: "task1", isCompleted: false },
    { name: "task2", isCompleted: true },
    { name: "task3", isCompleted: false }
  ]
});

export default function App() {
  const [state, setState] = useState(store.getState());
  const [todoValue, setTodoValue] = useState("");
  return (
    <div className="App">
      <h2>Our Todolist App</h2>
      {state.todos.map(todo => (
        <p key={todo.name}>
          {todo.name}
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={e => {
              store.dispatch({
                type: "updateTodo",
                name: todo.name,
                isCompleted: !todo.isCompleted
              });
              setState(store.getState());
            }}
          />
        </p>
      ))}
      <form
        onSubmit={e => {
          store.dispatch({ type: "addTodo", name: todoValue });
          setState(store.getState());
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
    </div>
  );
}

/* 
Your task is to add a new action to add new todo
View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson4

--Walkthrough--

state.todo returns an array
we can use spread operator - adding the property to be updated at the end to overwrite existing one
Object.assign and spread operator does shallow copy 
meaning they don't copy inner items
state:{
  todos:{
    INNER ITEMS
  }
}
so Object.assign({},state,{todos:{name:action.name, isCompleted:action.isCompleted}}) 
removes all the other todos


What are actions?

Actions are just javascript objects
As simple as this --> { type: "an action type" }
The property type is used to tell the reducer how it should proceed.


What is dispatch?

Basically, it triggers state change.
Calls store's reducer with previous state and action.


Why use object.assign?

Because we don't mutate the state.
Instead, we create a copy using Object.assign().
Since the first argument will be mutated,
we must supply an empty object as the first parameter.


What does the syntax using object.assign mean?

Object.assign({}, state, {
        jokeAnswer: "Because it saw something exciting on the other side."
      })
First parameter is the empty object to be mutated
Second parameter onwards are called sources
Properties in the target object will be overwritten by properties in the sources 
if they have the same key. 
Later sources' properties will similarly overwrite earlier ones.


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


How does the reducer know what to do when it receives an action?

A reducer decides what to do based on a switch.
It checks what the action type is, and then handles it accordingly.
  switch (action.type) {
    default:
      return "hello there!";
  }

View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson4
*/
