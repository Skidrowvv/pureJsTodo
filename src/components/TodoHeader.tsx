import { useState } from "react";
import { useDispatch } from "react-redux";

import { GoPlus } from "react-icons/go";
import { addTodo } from "../redux/todoSlice";

const TodoHeader = () => {
  const [inputData, setInputData] = useState<string>(""),
    dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3 mb-7">
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        value={inputData}
        placeholder="Создать задачу..."
        type="text"
        className="rounded py-2 px-4  w-full bg-transparent dark:text-white border border-customGray focus:outline-none dark:placeholder:text-white"
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
