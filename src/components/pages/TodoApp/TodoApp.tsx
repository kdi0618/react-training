/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./Top/Top";
import { Detail } from "./Detail/Detail";
import { Loading } from "../../common/Loading";
import { NotFound } from "./NotFound/NotFound";
import {
  setValue,
  getValue,
  deleteValue,
} from "../../../functions/mockApiAccess";
import { Todo, TodoMap } from "../../../types/todo";
import { PAGE_URL } from "../../../const/pageUrl";
import { LOCAL_STORAGE_KEY_OF_TODO } from "../../../const/key";
import { createNewTodo } from "../../../functions/createTodo";

export const TodoApp: React.FC = React.memo(() => {
  const [isLoading, setLoadingUI] = useState<boolean>(true);
  const [isLoadingTodoListArea, setLoadingTodoListArea] =
    useState<boolean>(false);
  const [todoMap, setTodoMap] = useState<TodoMap>(new Map());

  // Todoを取得する
  useEffect(() => {
    const getTodo = async () => {
      const response = await getValue(LOCAL_STORAGE_KEY_OF_TODO);
      const initialViewTodoArray = response ? JSON.parse(response) : [];
      setTodoMap(new Map(initialViewTodoArray));
      setLoadingUI(false);
    };
    getTodo();
  }, []);

  // 新規Todoを追加する
  const createTodo = async (todoName: string) => {
    setLoadingTodoListArea(true);
    const newTodo = createNewTodo(todoName);
    todoMap.set(newTodo.id, newTodo);
    // Todoをローカルストレージへ保存する
    await setValue(
      LOCAL_STORAGE_KEY_OF_TODO,
      JSON.stringify(Array.from(todoMap))
    );
    setLoadingTodoListArea(false);
  };

  // Todoの内容を更新する
  const updateTodo = async (updatedTodoData: Todo) => {
    setLoadingTodoListArea(true);
    todoMap.set(updatedTodoData.id, updatedTodoData);
    // Todoをローカルストレージへ保存する
    await setValue(
      LOCAL_STORAGE_KEY_OF_TODO,
      JSON.stringify(Array.from(todoMap))
    );
    setLoadingTodoListArea(false);
  };

  // 指定のtodoを削除する
  const deleteTodo = async (deleteTodoId: string) => {
    setLoadingTodoListArea(true);
    todoMap.delete(deleteTodoId);
    // Todoをローカルストレージへ保存する
    await setValue(
      LOCAL_STORAGE_KEY_OF_TODO,
      JSON.stringify(Array.from(todoMap))
    );
    setLoadingTodoListArea(false);
  };

  // 全てのTodoを削除する
  const deleteAllTodo = async () => {
    setLoadingTodoListArea(true);
    todoMap.clear();
    await deleteValue(LOCAL_STORAGE_KEY_OF_TODO);
    setLoadingTodoListArea(false);
  };

  return (
    <div>
      <BrowserRouter>
        {isLoading ? (
          <Loading emotionStyles={loadingIconContainer} />
        ) : (
          <Routes>
            <Route
              path={PAGE_URL.TOP}
              element={
                <Top
                  onCreateTodo={createTodo}
                  todoMap={todoMap}
                  onDeleteTodo={deleteTodo}
                  onDeleteAllTodo={deleteAllTodo}
                  isLoadingTodoListArea={isLoadingTodoListArea}
                />
              }
            />
            <Route
              path={`${PAGE_URL.DETAIL}/:todoId`}
              element={<Detail onUpdateTodo={updateTodo} todoMap={todoMap} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
});

const loadingIconContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
