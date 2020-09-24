import React from "react";
import TodoList from "./TodoList";
import CompletedTodoList from "./CompletedTodoList";
import AddTodo from "./AddTodo";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  undoCompleteTodo,
} from "./actions/todoActions";
import { connect } from "react-redux";

function App({
  todos,
  completedTodos,
  addTodo,
  deleteTodo,
  completeTodo,
  undoCompleteTodo,
}) {
  return (
    <div className="App container">
      <h1 className="center blue-text">My Todo List</h1>
      <AddTodo addNewTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <div className="divider"></div>
      <h5 className="center blue-text text-lighten-4">Completed Todos:</h5>
      <CompletedTodoList
        todos={completedTodos}
        undoCompleteTodo={undoCompleteTodo}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { todos, completedTodos } = state;
  return { todos, completedTodos };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todoContent) => {
      dispatch(addTodo(todoContent));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    completeTodo: (id) => {
      dispatch(completeTodo(id));
    },
    undoCompleteTodo: (id) => {
      dispatch(undoCompleteTodo(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
