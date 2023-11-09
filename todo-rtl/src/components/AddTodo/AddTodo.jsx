import React, { useRef } from "react";
import { uuid } from "uuidv4";

const AddTodo = ({ add }) => {
  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ref.current.value) return;
    add({ title: ref.current.value, id: uuid(), completed: false });
    ref.current.value = "";
  };

  return (
    <div>
      <h1>Add a to do</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          type='text'
          name='todo'
          id='todo'
          placeholder='add a new to do'
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
