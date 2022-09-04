/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { TodoList } from "./TodoList/TodoList";
import { Loading } from "../../../../common/Loading";
import { VIEW_STATUS_OF_TODO } from "../../../../../const/status";
import { TodoMap } from "../../../../../types/todo";

type TodoListWrapperProps = {
  todoMap: TodoMap;
  isLoadingTodoListArea: boolean;
  onDeleteTodo: (todoId: string) => void;
};

export const TodoListWrapper: React.FC<TodoListWrapperProps> = React.memo(
  (props) => {
    return (
      <>
        {props.isLoadingTodoListArea ? (
          <Loading emotionStyles={loading} />
        ) : (
          <div>
            {VIEW_STATUS_OF_TODO.map((todoListData) => {
              const statusFilteredList = Array.from(
                props.todoMap.values()
              ).filter((todo) => todo.status === todoListData.value);
              return (
                <TodoList
                  statusTitle={todoListData.title}
                  todoList={statusFilteredList}
                  key={todoListData.title}
                  onDeleteTodo={props.onDeleteTodo}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
);

const loading = css`
  display: flex;
  margin-top: 25%;
  margin-left: 40%;
`;
