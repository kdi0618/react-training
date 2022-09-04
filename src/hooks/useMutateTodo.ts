import { useMutation, useQueryClient } from "react-query";
import { Todo, TodoMap } from "../types/todo";
import { setValue, deleteValue } from "../functions/mockApiAccess";
import { createTodo } from "../functions/createTodo";
import { LOCAL_STORAGE_KEY_OF_TODO, QUERY_KEY } from "../const/key";
import { useQueryLoading } from "./useQueryTodo";

export const useMutateTodo = () => {
  const queryClient = useQueryClient();
  const todoMap: TodoMap =
    queryClient.getQueryData(QUERY_KEY.TODO) ?? new Map();
  const { setLoadingFlg } = useQueryLoading();

  /**
   * @description todoを作成する
   * @param todoName 作成するtodo名
   */
  const createTodoMutation = useMutation(
    async (todoName: string) => {
      const newTodo: Todo = createTodo(todoName);
      todoMap.set(newTodo.id, newTodo);
      setLoadingFlg(true);
      // Todoをローカルストレージへ保存する
      await setValue(
        LOCAL_STORAGE_KEY_OF_TODO,
        JSON.stringify(Array.from(todoMap))
      );
    },
    {
      onSuccess: () => {
        // キャッシュとローカルストレージのデータを同期する
        queryClient.invalidateQueries(QUERY_KEY.TODO);
      },
      onSettled: () => {
        setLoadingFlg(false);
      },
    }
  );

  /**
   * @description todoを更新する
   * @param editTodoData 編集したtodoデータ
   */
  const updateTodoMutation = useMutation(
    async (editTodoData: Todo) => {
      todoMap.set(editTodoData.id, editTodoData);
      setLoadingFlg(true);
      // Todoをローカルストレージへ保存する
      await setValue(
        LOCAL_STORAGE_KEY_OF_TODO,
        JSON.stringify(Array.from(todoMap))
      );
    },
    {
      onSuccess: () => {
        // キャッシュとローカルストレージのデータを同期する
        return queryClient.invalidateQueries(QUERY_KEY.TODO);
      },
      onSettled: () => {
        setLoadingFlg(false);
      },
    }
  );

  /**
   * @description 指定したtodoを削除する
   * @param deleteTodoData 削除対象のtodoデータ
   */
  const deleteTodoMutation = useMutation(
    async (deleteTodoData: Todo) => {
      todoMap.delete(deleteTodoData.id);
      setLoadingFlg(true);
      // 更新後のTodoをローカルストレージへ保存する
      await setValue(
        LOCAL_STORAGE_KEY_OF_TODO,
        JSON.stringify(Array.from(todoMap))
      );
    },
    {
      onSuccess: () => {
        // キャッシュとローカルストレージのデータを同期する
        queryClient.invalidateQueries(QUERY_KEY.TODO);
      },
      onSettled: () => {
        setLoadingFlg(false);
      },
    }
  );

  /**
   * @description 全てのtodoを削除する
   */
  const deleteAllTodoMutation = useMutation(
    async () => {
      setLoadingFlg(true);
      todoMap.clear();
      // ローカルストレージのデータを削除する
      await deleteValue(LOCAL_STORAGE_KEY_OF_TODO);
    },
    {
      onSuccess: () => {
        // キャッシュとローカルストレージのデータを同期する
        queryClient.invalidateQueries(QUERY_KEY.TODO);
      },
      onSettled: () => {
        setLoadingFlg(false);
      },
    }
  );

  return {
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
    deleteAllTodoMutation,
  };
};
