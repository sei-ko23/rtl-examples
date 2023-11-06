import React from "react";
import Todo from "../Todo/Todo";

const DisplayTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default DisplayTodo;
