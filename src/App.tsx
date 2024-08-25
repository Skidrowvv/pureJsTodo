import { useSelector } from "react-redux";

import { RootState } from "./redux/store";

import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

function App() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <>
      <div className="container p-4 h-screen flex flex-col items-center">
        <div className="w-full mt-6">
          <TodoHeader />

          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
