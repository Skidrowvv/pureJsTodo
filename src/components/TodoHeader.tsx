import { useState } from "react";

import { GoPlus } from "react-icons/go";
import { addTodo } from "../redux/todoSlice";
import { useAppDispatch } from "../hooks";

const TodoHeader = () => {
  const [inputData, setInputData] = useState<string>(""),
    dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3 mb-7">
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        value={inputData}
        placeholder="Создать задачу..."
        type="text"
        className="py-2 px-4  w-full bg-transparent rounded duration-300 dark:text-white border border-customGray focus:outline-none dark:placeholder:text-white"
      />

      <button
        onClick={() => {
          if (inputData.length >= 1 || inputData != "") {
            dispatch(addTodo(inputData));
            setInputData("");
          }
        }}
        className="flex items-center justify-center w-[44px] h-[40px] text-[21px] bg-customBlue text-white rounded hover:bg-blue-500 focus:outline-none"
      >
        <GoPlus />
      </button>
    </div>
  );
};
export default TodoHeader;
