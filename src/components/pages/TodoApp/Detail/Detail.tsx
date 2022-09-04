import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { DetailContent } from "./DetailContent/DetailContent";
import { useQueryFetchTodo } from "../../../../hooks/useQueryTodo";

export const Detail: React.FC = React.memo(() => {
  const todoQueryData = useQueryFetchTodo();
  const todoMap = todoQueryData.data ?? new Map();
  const todoId = useParams().todoId;
  const detailTodo =
    todoId && todoMap.has(todoId) ? todoMap.get(todoId) : undefined;

  return (
    <>
      {!detailTodo ? <NotFound /> : <DetailContent detailTodo={detailTodo} />}
    </>
  );
});
