import { useState } from "react";
import { uuid } from "uuidv4";
import AddTodo from "./components/AddTodo/AddTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "do this",
      id: uuid(),
      completed: true,
    },
    {
      title: "do that",
      id: uuid(),
      completed: false,
    },
  ]);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const markCompleted = (todoId) => {
    setTodos(
      [...todos].map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (todoId) => {
    setTodos([...todos].filter((todo) => todo.id !== todoId));
  };
  return (
    <div className='App-header'>
      <AddTodo add={addNewTodo} />
      <DisplayTodo
        todos={todos}
        markCompleted={markCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
