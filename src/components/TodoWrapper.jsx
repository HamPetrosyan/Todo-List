import { useSelector } from "react-redux";

import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodo } from "./EditTodo";

export const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1 className="TodoList">To-do List</h1>
      <div className="TodoWrapper">
        <h1>Get Things Done!</h1>
        <TodoForm />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodo key={todo.id} task={todo} />
          ) : (
            <Todo task={todo} key={todo.id} />
          )
        )}
      </div>
    </div>
  );
};
