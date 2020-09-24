import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const INITIAL_TODOS = [
  { id: 1, content: "Study Redux" },
  { id: 2, content: "Clean my room" },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const completeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const addNewTodo = (todoContent) => {
    const newTodo = { id: todos.length + 1, content: todoContent };
    const updatedTodoList = [...todos, newTodo];
    setTodos(updatedTodoList);
  };

  return (
    <div className="App container">
      <h1 className="center blue-text">My Todo List</h1>
      <AddTodo addNewTodo={addNewTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
