import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { IInitialState, ITodo } from "../types";

const getInitialState = () => {
    if (typeof window !== undefined) {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      return todos;
    }
  },
  saveTodos = (todos: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

const initialState: IInitialState = {
  todos: getInitialState(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: any, action: PayloadAction<any>) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });

      saveTodos(state.todos);
    },

    setCompleted: (state: any, action: PayloadAction<ITodo>) => {
      state.todos.map((todo: ITodo) => {
        return todo.id == action.payload.id ? (todo.completed = !todo.completed) : todo;
      });
      saveTodos(state.todos);
    },

    removeTodo: (state: any, action: any) => {
      state.todos = state.todos.filter((todo: ITodo) => todo.id !== action.payload);
      saveTodos(state.todos);
    },
  },
});

export const { addTodo, setCompleted, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
