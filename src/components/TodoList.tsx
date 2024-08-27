import { IInitialState, ITodo } from "../types";

import TodoItem from "./TodoItem";

const TodoList = ({ todos }: IInitialState) => {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo: ITodo, idx: number) => {
        return <TodoItem data={todo} todoId={idx + 1} key={idx} />;
      })}
    </ul>
  );
};
export default TodoList;
