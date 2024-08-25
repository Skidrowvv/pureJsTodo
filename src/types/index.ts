export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
}
