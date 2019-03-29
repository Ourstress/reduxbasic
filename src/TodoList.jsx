import React from "react";
import { store } from "./App";
// import { connect } from "react-redux";

export default function TodoList(props) {
  return (
    <div className="App">
      <h2>Our Todolist App</h2>
      {store.getState().todos.map(todo => (
        <p key={todo.name}>
          {todo.name}
          <input type="checkbox" checked={todo.isCompleted} />
        </p>
      ))}
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   };
// };

// export default connect(mapStateToProps)(TodoList);

/* 
Your task is to connect the UserProfile.jsx component to the store 
using react-redux's connect and mapStateToProps features

View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson5

--Walkthrough--

What is react-redux?

react-redux makes using redux in react easy in large apps
by providing components / functions that we can import and use.


What is Provider?

The <Provider /> makes the Redux store available to any nested components 
that have been wrapped in the connect() function.
It allows us to spread out our code in smaller components.


What is react-redux connect?

The connect function allows any component to interact with the Redux Store.
Connect is better to use than importing the store itself to dispatch(action) / getState().


What is mapStateToProps?

It is the first argument passed in to connect
Used for selecting the part of the data from the store that the connected component needs. 
Return a plain object that contains the data the component needs:
  return {
    todos: state.todos
  };
};
Will be called every time when the Redux store state changes. 
The values in the fields will be used to determine if your component needs to re-render
Eg. if state.todos was changed, the props.todos automatically update and trigger re-render.


View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson5
*/
