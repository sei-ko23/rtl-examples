import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const DisplayTodo = ({ todos, markCompleted, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          markCompleted={markCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default DisplayTodo;
