import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { DetailContent } from "./DetailContent/DetailContent";
import { Todo, TodoMap } from "../../../../types/todo";

export type DetailProps = {
  onUpdateTodo: (upDateTodoData: Todo) => void;
  todoMap: TodoMap;
};

export const Detail: React.FC<DetailProps> = React.memo((props) => {
  const todoId = useParams().todoId;
  const detailTodo =
    todoId && props.todoMap.has(todoId) ? props.todoMap.get(todoId) : undefined;

  return (
    <>
      {!detailTodo ? (
        <NotFound />
      ) : (
        <DetailContent
          detailTodo={detailTodo}
          onUpdateTodo={props.onUpdateTodo}
        />
      )}
    </>
  );
});
