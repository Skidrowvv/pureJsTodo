import TodoItem from "./TodoItem";

const TodoList = ({ todos }: any) => {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo: any, idx: number) => {
        return <TodoItem data={todo} todoId={idx + 1} key={idx} />;
      })}
    </ul>
  );
};
export default TodoList;
