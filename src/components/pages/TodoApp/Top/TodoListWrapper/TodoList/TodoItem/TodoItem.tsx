/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Todo } from "../../../../../../../types/todo";
import { PAGE_URL } from "../../../../../../../const/pageUrl";

export type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (todoId: string) => void;
};

export const TodoItem: React.FC<TodoItemProps> = React.memo((props) => {
  return (
    <li css={listItem}>
      <Link to={`${PAGE_URL.DETAIL}/${props.todo.id}`} css={listItemText}>
        ▶︎ {props.todo.name}
      </Link>
      <div
        css={deleteButton}
        className="deleteButton"
        onClick={() => props.onDeleteTodo(props.todo.id)}
      ></div>
    </li>
  );
});

const deleteButton = css`
  cursor: pointer;
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 1px;
    background: #bb0000;
    transform: rotate(45deg);
    position: relative;
    top: 15px;
    left: 5px;
  }
  &::after {
    display: block;
    content: "";
    width: 20px;
    height: 1px;
    background: #bb0000;
    transform: rotate(-45deg);
    position: relative;
    top: 14px;
    left: 5px;
  }
`;

const listItem = css`
  cursor: pointer;
  padding: 4px 40px 0 10px;
  position: relative;
  width: fit-content;
  max-width: 380px;
  &:hover > .deleteButton {
    display: block;
  }
`;

const listItemText = css`
  &:hover {
    color: #1e90ff;
    text-decoration: underline;
  }
`;
