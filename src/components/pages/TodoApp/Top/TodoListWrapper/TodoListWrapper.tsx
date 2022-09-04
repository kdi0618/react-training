/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { TodoList } from "./TodoList/TodoList";
import { VIEW_STATUS_OF_TODO } from "../../../../../const/status";
import {
  useQueryFetchTodo,
  useQueryLoading,
} from "../../../../../hooks/useQueryTodo";
import { Loading } from "../../../../common/Loading";

export const TodoListWrapper: React.FC = React.memo(() => {
  const todoQueryData = useQueryFetchTodo();
  const todoMap = todoQueryData.data ?? new Map();
  const { isLoading } = useQueryLoading();

  return (
    <>
      {isLoading || todoQueryData.isRefetching ? (
        <Loading emotionStyles={loadingIconWrapper} />
      ) : (
        VIEW_STATUS_OF_TODO.map((todoListData) => {
          const statusFilteredList = Array.from(todoMap.values()).filter(
            (todo) => todo.status === todoListData.value
          );
          return (
            <TodoList
              statusTitle={todoListData.title}
              todoList={statusFilteredList}
              key={todoListData.title}
            />
          );
        })
      )}
    </>
  );
});

const loadingIconWrapper = css`
  display: flex;
  margin-top: 25%;
  margin-left: 40%;
`;
