export function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_INPUT_FIELD_VALUE":
      return { ...state, inputFieldValue: payload.value };
    case "UPDATE_ACTIVE_FILTER": {
      return { ...state, activeFilter: payload.filter };
    }
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: state.inputFieldValue.trim(),
            completed: false
          }
        ],
        inputFieldValue: ""
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id)
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
