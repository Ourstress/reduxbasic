import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import TodoList from "./todoList/TodoList";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

// For writeup and walkthrough, see TodoList.jsx
