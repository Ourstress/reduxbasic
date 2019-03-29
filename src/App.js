import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import UserProfile from "./UserProfile";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = createStore(reducer, {
  todos: [
    { name: "task1", isCompleted: false },
    { name: "task2", isCompleted: true },
    { name: "task3", isCompleted: false }
  ],
  userProfile: {
    name: "Jane Doe",
    country: "UK"
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <UserProfile name="Mary Goh" country="Malaysia" />
      </div>
    </Provider>
  );
}

// For writeup and walkthrough, see TodoList.jsx
