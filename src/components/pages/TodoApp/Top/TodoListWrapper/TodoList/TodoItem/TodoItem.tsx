/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useMutateTodo } from "../../../../../../../hooks/useMutateTodo";
import { Todo } from "../../../../../../../types/todo";
import { PAGE_URL } from "../../../../../../../const/pageUrl";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: React.FC<TodoItemProps> = React.memo((props) => {
  const { deleteTodoMutation } = useMutateTodo();

  // todoの「×」ボタンクリック時
  const onClickDeleteBtn = async (): Promise<void> => {
    deleteTodoMutation.mutateAsync(props.todo);
  };

  return (
    <li css={listItem}>
      <Link
        to={`/${PAGE_URL.DETAIL}/${props.todo.id}`}
        state={props.todo}
        css={listItemText}
      >
        ▶︎ {props.todo.name}
      </Link>
      <div
        css={deleteButton}
        className="deleteButton"
        onClick={onClickDeleteBtn}
      ></div>
    </li>
  );
});

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

const deleteButton = css`
  cursor: pointer;
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  &::before,
  &::after {
    display: block;
    content: "";
    width: 20px;
    height: 1px;
    background: #bb0000;
    position: relative;
    left: 5px;
  }
  &::before {
    transform: rotate(45deg);
    top: 15px;
  }
  &::after {
    transform: rotate(-45deg);
    top: 14px;
  }
`;
