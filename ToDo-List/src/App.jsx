import React, { useState } from "react";

const App = () => {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(Todo);
    setTodos([...Todos, Todo]);
    setTodo("");
  }
  const deleteHandler = (idx) => {
    const copyTask = [...Todos]
    copyTask.splice(idx,1)
    setTodos(copyTask)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter Task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* ✅ Todo list with delete button (no logic yet) */}
      {Todos.length > 0
        ? Todos.map((item, idx) => (
              <div key={idx} className="flex  gap-10">
                <h1>{item}</h1>
                <button onClick={() => {deleteHandler(idx)} } >Delete</button>
              </div>
          ))
        : null}
    </div>
  );
};

export default App;
