/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { ContentTitle } from "./ContentTitle/ContentTitle";
import { ActionBtn } from "../../../common/ActionBtn";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { InputText } from "../../../common/InputText";
import { TodoListWrapper } from "./TodoListWrapper/TodoListWrapper";
import { BREADCRUMBS_OF_TOP } from "../../../../const/breadcrumb";
import { TodoMap } from "../../../../types/todo";

type TopProps = {
  todoMap: TodoMap;
  isLoadingTodoListArea: boolean;
  onCreateTodo: (todoName: string) => void;
  onDeleteTodo: (todoId: string) => void;
  onDeleteAllTodo: () => void;
};

export const Top: React.FC<TopProps> = React.memo((props) => {
  const [todoName, setTodoName] = useState<string>("");

  const onClickCreateTodoBtn = () => {
    setTodoName("");
    props.onCreateTodo(todoName);
  };

  return (
    <div css={todoTop}>
      <Breadcrumb breadcrumbsList={BREADCRUMBS_OF_TOP} />
      <div css={contentsWrapper}>
        <section css={contentsArea}>
          <ContentTitle title="todo作成" />
          <div css={createTodoArea}>
            <InputText
              placeholder="add new task"
              value={todoName}
              onChange={(event) => setTodoName(event.target.value)}
            />
            <ActionBtn
              isDisabled={!todoName}
              onClick={onClickCreateTodoBtn}
              text="作成"
            />
          </div>
        </section>
        <section css={contentsArea}>
          <div css={titleWrapper}>
            <ContentTitle title="todo一覧" />
            <button css={clearBtn} onClick={props.onDeleteAllTodo}>
              Todoクリア
            </button>
          </div>
          <TodoListWrapper
            todoMap={props.todoMap}
            onDeleteTodo={props.onDeleteTodo}
            isLoadingTodoListArea={props.isLoadingTodoListArea}
          />
        </section>
      </div>
    </div>
  );
});

const todoTop = css`
  margin: 0 auto;
  margin-top: 80px;
  width: 800px;
`;

const contentsWrapper = css`
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
`;

const contentsArea = css`
  width: 300px;
`;

const createTodoArea = css`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
`;

const titleWrapper = css`
  display: flex;
`;

const clearBtn = css`
  border: 1px solid #ee0000;
  border-radius: 4px;
  color: #ee0000;
  margin-left: 10px;
  height: 28px;
  width: 100px;
`;
