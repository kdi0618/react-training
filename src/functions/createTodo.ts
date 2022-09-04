import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types/todo";

export const createNewTodo = (todoName: string): Todo => {
  const todoId = uuidv4();
  const newTodo: Todo = {
    id: todoId,
    name: todoName,
    status: "toDo",
    detail: "",
  };
  return newTodo;
};
