import React from "react";
import InputForm from "../components/InputForm";
import { connect } from "react-redux";
import { updateTodo } from "./actions";

function TodoList(props) {
  return (
    <div className="App">
      <h2>Our Todolist App</h2>
      {props.todos.map(todo => (
        <p key={todo.name}>
          {todo.name}
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={e => {
              props.updateTodo(todo.name);
            }}
          />
        </p>
      ))}
      <InputForm
      // addTodo={props.addTodo} // Uncomment to add your logic here
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  updateTodo: todoName => {
    dispatch(updateTodo(todoName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

/* 
Your task is to pass the addTodo dispatch 
from the TodoList component to the InputForm component 

Firstly, import addTodo action from actions.js
Secondly, update mapDispatchToProps to include addTodo
Thirdly, uncomment the passing of props in InputForm component above.

View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson6

--Walkthrough--

What is mapDispatchToProps?

Provides component with access to store's dispatch function.


Why use mapDispatchToProps instead of importing the store and calling store.dispatch(action)?

Using mapDispatchToProps gives us more flexibility.
Because the component only receive props.
It doesn't know the props came from redux.
Also, without the connect Higher Order Component, 
The component itself doesn't "know about" Redux at all.
We can test that component's logic independently of Redux.


What is react-redux connect?

It is a Higher Order Component which is a function
that takes a component and returns a new component.
const EnhancedComponent = higherOrderComponent(WrappedComponent);
In react-redux connect's case,
The wrapped component - our todolist - gets access to interact with the store.
Refer to https://reactjs.org/docs/higher-order-components.html


What is a good code structure for Redux?

In this codebase, we have taken the approach of separating our code 
- each component has its own folder that contains its own actions.js and reducers.js
- reusable UI type of functional components in another folder
- the functional component InputForm doesn't know about Redux
- we also use action creators that components can import
ie. export const updateTodo = todoName => ({
  type: "updateTodo",
  name: todoName
});
- the advantage of using action creator is that our component doesn't need to know what the action does
- all the component needs to do is to dispatch it.
    onChange={e => {
              props.updateTodo(todo.name);
            }}
- all the action logic is easily found in actions.js
- disadvantage is that we have to create actions.js for every component and import actions when needed.
There are many guides written on redux code structure. Do consult:
https://redux.js.org/faq/code-structure


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


View demo at https://codesandbox.io/s/github/Ourstress/reduxbasic/tree/reduxLesson6
*/
