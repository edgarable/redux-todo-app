const addTodo = (content) => {
  return {
    type: "ADD_TODO",
    id: Math.random(),
    content,
  };
};

const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    id,
  };
};

const undoCompleteTodo = (id) => {
  return {
    type: "UNDO_COMPLETE_TODO",
    id,
  };
};

export { addTodo, completeTodo, deleteTodo, undoCompleteTodo };
