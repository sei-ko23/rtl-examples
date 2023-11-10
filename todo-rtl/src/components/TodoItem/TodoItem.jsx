import React from "react";

const TodoItem = ({ todo, markCompleted, deleteTodo }) => {
  const handleCompleted = (todoId) => {
    markCompleted(todoId);
  };
  if (!todo) return null;
  return (
    <div>
      <input
        type='checkbox'
        defaultChecked={todo.completed}
        id={todo.id}
        onChange={() => handleCompleted(todo.id)}
      />
      <label aria-labelledby='todo-label' htmlFor={todo.id}>
        {todo.title}
      </label>
      <button type='button' onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
