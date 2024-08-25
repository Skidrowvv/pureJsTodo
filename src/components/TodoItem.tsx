import { useDispatch } from "react-redux";
import { removeTodo, setCompleted } from "../redux/todoSlice";
import { FaTrash } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const TodoItem = (todoData: any) => {
  const { id, text, completed } = todoData.data,
    dispatch = useDispatch();

  return (
    <li
      className={`flex justify-between items-center bg-[#36373A] border  ${
        completed ? "border-emerald-500" : "border-[#36373A]"
      } rounded-md px-4 py-1`}
    >
      <div className="flex items-center gap-2 text-white">
        <span>{todoData.todoId}</span>

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
          className="p-2 text-xl bg-emerald-600 text-white rounded focus:outline-none"
          onClick={() =>
            dispatch(
              setCompleted({ id: todoData.data.id, completed: todoData.data.completed })
            )
          }
        >
          <IoMdCheckmark/> 
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
