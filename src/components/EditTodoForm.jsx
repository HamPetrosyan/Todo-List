import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/todoSlice";
import { playSound } from "../utils/sound";

export const EditTodoForm = ({ task }) => {
  const [value, setValue] = useState(task.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch(updateTodo({ id: task.id, updatedTask: value }));
      playSound("add-task.wav");
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
