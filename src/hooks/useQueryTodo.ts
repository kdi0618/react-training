import { useQuery, useQueryClient } from "react-query";
import { getValue } from "../functions/mockApiAccess";
import { TodoMap } from "../types/todo";
import { LOCAL_STORAGE_KEY_OF_TODO, QUERY_KEY } from "../const/key";

export const useQueryFetchTodo = () => {
  const getTodoMap = async (): Promise<TodoMap> => {
    const response = await getValue(LOCAL_STORAGE_KEY_OF_TODO);
    const todoMapArray = response ? JSON.parse(response) : [];
    return new Map(todoMapArray);
  };
  return useQuery<TodoMap, Error>({
    queryKey: QUERY_KEY.TODO,
    queryFn: getTodoMap,
  });
};

export const useQueryLoading = () => {
  const queryClient = useQueryClient();
  const isLoading = useQuery<boolean>({
    queryKey: QUERY_KEY.IS_LOADING,
    queryFn: () => false,
  }).data;
  const setLoadingFlg = (isUpdatedLoading: boolean) => {
    queryClient.setQueryData(QUERY_KEY.IS_LOADING, isUpdatedLoading);
  };
  return { isLoading, setLoadingFlg };
};
