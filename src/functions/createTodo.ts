import { v4 as uuidv4 } from "uuid";
import { STATUS_OF_TODO } from "../const/status";
import { Todo } from "../types/todo";

export const createTodo = (todoName: string): Todo => {
  const newTodo = {
    id: uuidv4(),
    name: todoName,
    status: STATUS_OF_TODO.TODO,
    detail: "",
  };
  return newTodo;
};
