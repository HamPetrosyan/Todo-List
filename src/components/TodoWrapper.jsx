import { useSelector } from "react-redux";

import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} task={todo} />
        ) : (
          <Todo task={todo} key={todo.id} />
        )
      )}
    </div>
  );
};
