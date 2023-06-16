import { useContext } from "react";
import { TodoContext } from "../context";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex: 1 0 auto;
  font-weight: 500;
  font-size: 16px;
  color: rgb(36, 35, 65);
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  color: grey;
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline-color: rgb(199, 228, 297);
  }
`;

export default function TodoForm() {
  const { addTodo, inputFieldValue, updateInputFieldValue } = useContext(
    TodoContext
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <StyledForm>
      <StyledLabel>
        Создать задачу
        <StyledInput
          type="text"
          value={inputFieldValue}
          onChange={(e) => updateInputFieldValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите текст задачи"
        />
      </StyledLabel>
    </StyledForm>
  );
}
