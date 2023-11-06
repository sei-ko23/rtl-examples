import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "do this",
      id: Math.random(),
    },
    {
      title: "do that",
      id: Math.random(),
    },
  ]);
  return (
    <div className='App-header'>
      <AddTodo />
      <DisplayTodo todos={todos} />
    </div>
  );
}

export default App;
