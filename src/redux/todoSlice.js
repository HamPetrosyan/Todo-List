import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: uuidv4(),
        task: action.payload,
        completed: false,
        isEditing: false,
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isEditing = !todo.isEditing;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    updateTodo: (state, action) => {
      const { id, updatedTask } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.task = updatedTask;
        todo.isEditing = false;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo, editTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
