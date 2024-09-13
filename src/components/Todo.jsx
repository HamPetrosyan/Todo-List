import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { toggleCompleted, deleteTodo, editTodo } from "../redux/todoSlice";
import { playSound } from "../utils/sound";
import { useState } from "react";

export const Todo = ({ task }) => {
  const dispatch = useDispatch();
  const [isFading, setIsFading] = useState(false);

  const handleToggleComplete = () => {
    dispatch(toggleCompleted(task.id));
  };

  const handleDeleteTodo = () => {
    setIsFading(true);
    playSound("remove-task.wav", 0.1);

    setTimeout(() => {
      dispatch(deleteTodo(task.id));
    }, 500);
  };

  const handleEditTodo = () => {
    dispatch(editTodo(task.id));
  };

  return (
    <div className={`Todo ${isFading ? "fade-out" : ""}`}>
      <p
        onClick={handleToggleComplete}
        className={`task ${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          onClick={handleEditTodo}
          icon={faPenToSquare}
          className="edit-icon"
        />
        <FontAwesomeIcon
          onClick={handleDeleteTodo}
          icon={faTrash}
          className="delete-icon"
        />
      </div>
    </div>
  );
};
