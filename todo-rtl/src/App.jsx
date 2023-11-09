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
      completed: false,
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
  console.log(todos);
  return (
    <div className='App-header'>
      <AddTodo add={addNewTodo} />
      <DisplayTodo todos={todos} />
    </div>
  );
}

export default App;
