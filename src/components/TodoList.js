import { useContext } from "react";
import { TodoContext } from "../context";

import TodoItem from "./TodoItem";

import styled from "styled-components";

const StyledTodoList = styled.ul`
  height: 146px;
  margin-bottom: 15px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ empty }) => (!empty ? "center" : "stretch")};
  justify-content: ${({ empty }) => (!empty ? "center" : "flex-start")};
  row-gap: 10px;
`;

const StyledTodoEmpty = styled.li`
  list-style: none;
  color: lightgray;
`;

export default function TodoList() {
  const { todos, activeFilter, deleteTodo, toggleTodo } = useContext(
    TodoContext
  );

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "Завершеные") {
      return todo.completed;
    } else if (activeFilter === "Незавершеные") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <StyledTodoList empty={filteredTodos.length}>
      {filteredTodos.length === 0 && (
        <StyledTodoEmpty>Список задач пуст</StyledTodoEmpty>
      )}
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </StyledTodoList>
  );
}
