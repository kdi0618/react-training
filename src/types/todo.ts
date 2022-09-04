export type Todo = {
  id: string;
  name: string;
  status: string;
  detail: string;
};

export type TodoArray = Array<Todo>;

export type TodoMap = Map<string, Todo>;
