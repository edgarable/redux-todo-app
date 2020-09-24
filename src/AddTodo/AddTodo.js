import React, { useState } from "react";

function AddTodo({ addNewTodo }) {
  const [todoContent, setTodoContent] = useState("");
  const handleChange = (e) => {
    setTodoContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(todoContent);
    setTodoContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type="text" onChange={handleChange} value={todoContent} />
      </form>
    </div>
  );
}

export default AddTodo;
