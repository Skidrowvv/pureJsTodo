import { IoMdCheckmark } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

import { removeTodo, setCompleted } from "../redux/todoSlice";

import { ITodo } from "../types";
import { useAppDispatch } from "../hooks";

const TodoItem = (todoData: { data: ITodo; todoId: number }) => {
  const { id, text, completed } = todoData.data,
    dispatch = useAppDispatch();

  return (
    <li
      className={`px-4 py-2 flex justify-between items-center shadow-sm bg-white dark:bg-customTodoBg  border-[3px] rounded-md duration-300 ${
        completed ? "border-customGreen" : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-2 dark:text-white">
        <span>{todoData.todoId})</span>

        {text}
      </div>

      <div className="flex items-center gap-2">
        <button
          className="p-2 text-xl bg-customRed text-white rounded focus:outline-none"
          onClick={() => dispatch(removeTodo(id))}
        >
          <FaTrash />
        </button>
        <button
          className="p-2 text-xl bg-customGreen text-white rounded focus:outline-none"
          onClick={() =>
            dispatch(
              setCompleted({ id: todoData.data.id, completed: todoData.data.completed })
            )
          }
        >
          <IoMdCheckmark />
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
