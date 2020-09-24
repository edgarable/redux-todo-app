import React from "react";

function TodoList({ todos, completeTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <span onClick={() => completeTodo(todo.id)}>{todo.content}</span>
      </div>
    ))
  ) : (
    <p className="center">You don't have any TODOs!</p>
  );

  return <div className="todos collection">{todoList}</div>;
}

export default TodoList;
