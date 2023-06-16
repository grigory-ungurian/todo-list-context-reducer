import { useContext } from "react";
import { TodoContext } from "../context";

import styled from "styled-components";

import { ReactComponent as PencelIcon } from "../assets/pencel.svg";

import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const StyledTodoApp = styled.div`
  padding: 25px 20px;
  width: 300px;
  max-height: 100%;
  background-color: white;
  border-radius: 20px;
  color: rgb(37, 37, 66);
`;

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: rgb(36, 35, 65);
`;

const StyledSubmit = styled.button`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background-color: rgb(67, 135, 233);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgb(67, 145, 233);
  }
`;

export default function TodoApp() {
  const { addTodo } = useContext(TodoContext);

  return (
    <StyledTodoApp>
      <StyledTitle>
        Задачи на день <PencelIcon width="20" height="20" />
      </StyledTitle>
      <TodoForm />
      <TodoFilter />
      <TodoList />
      <StyledSubmit onClick={addTodo}>Создать задачу</StyledSubmit>
    </StyledTodoApp>
  );
}
