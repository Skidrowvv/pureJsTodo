import { RootState } from "./redux/store";

import { useAppSelector } from "./hooks";

import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
import ThemeButton from "./components/Theme/ThemeButton";


function App() {
  const todos = useAppSelector((state: RootState) => state.todo.todos);

  return (
    <>
      <div className="container p-4 h-screen flex flex-col items-center">
        <div className="self-start">
          <ThemeButton />
        </div>

        <div className="w-full mt-6">
          <TodoHeader />

          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
