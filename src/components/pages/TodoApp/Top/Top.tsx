/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { ContentTitle } from "./ContentTitle/ContentTitle";
import { ActionBtn } from "../../../common/ActionBtn";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { InputText } from "../../../common/InputText";
import { TodoListWrapper } from "./TodoListWrapper/TodoListWrapper";
import { BREADCRUMBS_OF_TOP } from "../../../../const/breadcrumb";
import { useMutateTodo } from "../../../../hooks/useMutateTodo";

export const Top: React.FC = React.memo(() => {
  const [inputName, setTodoName] = useState<string>("");
  const { createTodoMutation, deleteAllTodoMutation } = useMutateTodo();

  // todo名を入力している時の処理
  const onChangeTodoName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodoName(event.target.value);
  };

  // 「作成」ボタン押下時
  const onCreateTodo = async (): Promise<void> => {
    setTodoName("");
    createTodoMutation.mutateAsync(inputName);
  };

  // 「todoクリア」ボタン押下時
  const onDeleteTodo = async (): Promise<void> => {
    deleteAllTodoMutation.mutateAsync();
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
              value={inputName}
              onChange={onChangeTodoName}
            />
            <ActionBtn
              isDisabled={!inputName}
              onClick={onCreateTodo}
              text="作成"
            />
          </div>
        </section>
        <section css={contentsArea}>
          <div css={titleWrapper}>
            <ContentTitle title="todo一覧" />
            <button css={clearBtn} onClick={onDeleteTodo}>
              todoクリア
            </button>
          </div>
          <TodoListWrapper />
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
