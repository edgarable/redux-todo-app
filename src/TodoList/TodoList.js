import React from "react";

function TodoList({ todos, completeTodo, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <p>
          <label>
            <input type="checkbox" onChange={() => completeTodo(todo.id)} />
            <span>{todo.content}</span>
          </label>
          <a href="#!" className="right" onClick={() => deleteTodo(todo.id)}>
            <i className="material-icons  ">delete</i>
          </a>
        </p>
      </div>
    ))
  ) : (
    <p className="center">
      You don't have any TODOs pending!{" "}
      <span role="img" aria-label="Smiling Face Emoji">
        🙂
      </span>
    </p>
  );

  return <div className="todos collection">{todoList}</div>;
}

export default TodoList;
