import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const TodoContext = createContext();

const initialState = {
  todos: [],
  filteredTodos: [],
  inputFieldValue: "",
  activeFilter: "Все"
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.updateInputFieldValue = (value) => {
    dispatch({ type: "UPDATE_INPUT_FIELD_VALUE", payload: { value } });
  };

  value.updateActiveFilter = (currentFilter) => {
    dispatch({
      type: "UPDATE_ACTIVE_FILTER",
      payload: { filter: currentFilter }
    });
  };

  value.addTodo = () => {
    dispatch({ type: "ADD_TODO" });
  };

  value.deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  value.toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
