import React from "react";

function CompletedTodoList({ todos, undoCompleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <p>
          <label>
            <input
              type="checkbox"
              checked="checked"
              onChange={() => undoCompleteTodo(todo.id)}
            />
            <span>{todo.content}</span>
          </label>
        </p>
      </div>
    ))
  ) : (
    <p className="center">You don't have any completed TODOs!</p>
  );

  return <div className="todos collection">{todoList}</div>;
}

export default CompletedTodoList;
