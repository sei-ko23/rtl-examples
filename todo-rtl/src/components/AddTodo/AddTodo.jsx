import React, { useState } from "react";

const AddTodo = ({ add }) => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <h1>Add a to do</h1>
      <input
        type='text'
        name='todo'
        id='todo'
        placeholder='add a new to do'
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddTodo;
