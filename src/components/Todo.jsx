import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { toggleCompleted, deleteTodo, editTodo } from "../redux/todoSlice";
import { playSound } from "../utils/sound";

export const Todo = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleCompleted(task.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(task.id));
    playSound("remove-task.wav", 0.1);
  };

  const handleEditTodo = () => {
    dispatch(editTodo(task.id));
  };

  return (
    <div className="Todo">
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
