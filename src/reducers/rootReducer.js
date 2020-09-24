const initialState = {
  todos: [],
  completedTodos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const udpatedTodos = [
        ...state.todos,
        { id: action.id, content: action.content },
      ];
      return { ...state, todos: udpatedTodos };

    case "DELETE_TODO":
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: updatedTodos };

    case "COMPLETE_TODO":
      const completedTodo = state.todos.find((todo) => todo.id === action.id);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== completedTodo),
        completedTodos: [...state.completedTodos, completedTodo],
      };

    case "UNDO_COMPLETE_TODO":
      const uncompletedTodo = state.completedTodos.find(
        (todo) => todo.id === action.id
      );
      return {
        ...state,
        todos: [...state.todos, uncompletedTodo],
        completedTodos: state.completedTodos.filter(
          (todo) => todo !== uncompletedTodo
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
