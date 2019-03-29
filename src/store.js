import { createStore } from "redux";
import reducer from "./todoList/reducers";

const store = createStore(reducer, {
  todos: [
    { name: "task1", isCompleted: false },
    { name: "task2", isCompleted: true },
    { name: "task3", isCompleted: false }
  ]
});

export default store;
