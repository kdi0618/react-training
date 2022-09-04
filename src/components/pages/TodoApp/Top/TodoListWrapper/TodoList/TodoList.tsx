/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoArray } from "../../../../../../types/todo";

type TodoListProps = {
  statusTitle: string;
  todoList: TodoArray;
  onDeleteTodo: (todoId: string) => void;
};

export const TodoList: React.FC<TodoListProps> = React.memo((props) => {
  return (
    <div css={listWrapper}>
      <div css={listWrapperTitle}>{props.statusTitle}</div>
      <ul>
        {props.todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDeleteTodo={props.onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
});

const listWrapper = css`
  margin-bottom: 12px;
`;

const listWrapperTitle = css`
  color: #333333;
  font-weight: bold;
`;
