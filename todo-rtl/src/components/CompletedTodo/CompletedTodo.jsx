import React from "react";

const CompletedTodo = ({ todos }) => {
  const completedTodo = todos.filter((todo) => todo.completed);
  console.log(completedTodo);

  function renderCompletedTodosMessage() {
    if (completedTodo.length < 1) {
      return {
        title: "You have no task completed yet..",
        subtitle: `You still have ${todos.length} tasks to complete`,
      };
    } else if (completedTodo.length < todos.length) {
      return {
        title: "You have some tasks completed",
        subtitle: `Only ${
          todos.length - completedTodo.length
        } tasks to complete`,
      };
    } else {
      return {
        title: "You have completed all your tasks",
        subtitle: ` ${todos.length} task were completed`,
      };
    }
  }
  return (
    <div>
      <h2>{renderCompletedTodosMessage().title}</h2>
      <h6>{renderCompletedTodosMessage().subtitle}</h6>
    </div>
  );
};

export default CompletedTodo;
