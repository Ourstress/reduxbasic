import React, { useState } from "react";
import "./App.css";
import { createStore } from "redux";

const reducer = (
  state = {
    name: "Our TODOLIST App",
    joke: "Why did the cat cross the road?",
    jokeAnswer: "Press the button below if you thought of the answer :P"
  },
  action
) => {
  switch (action.type) {
    case "revealAnswer":
      return Object.assign({}, state, {
        jokeAnswer: "Because it saw something exciting on the other side."
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  const [state, setState] = useState(store.getState());
  return (
    <div className="App">
      <p>{state.name}</p>
      <p>Here's our joke of the day:</p>
      <p>{state.joke}</p>
      <p>{state.jokeAnswer}</p>
      <button
        onClick={e => {
          store.dispatch({ type: "revealAnswer" });
          setState(store.getState());
        }}
      >
        Click to reveal joke answer
      </button>
      <br />
      <br />
      <button
        onClick={e => {
          // Add a new type to the reducer switch above and modify / uncomment the next line:
          // store.dispatch({ type: "revealAnswer" });
          setState(store.getState());
        }}
      >
        Click to hide joke answer
      </button>
    </div>
  );
}

/* 
Your task is to add a new action to hide the jokeAnswer
View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson3

--Walkthrough--

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

View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson1
*/
