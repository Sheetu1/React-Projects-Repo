import React, { useState } from "react";

const App = () => {
  const [Todo, setTodo] = useState('');
  const [Todos, setTodos] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(Todo);
    setTodos([...Todos, Todo]);
    setTodo("");
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

      {/* ✅ Correct conditional rendering */}
      {
        Todos.length > 0 ? (
          Todos.map((item, idx) => (
            <div key={idx}>
              <h1>{item}</h1>
            </div>

          ))
        ) : null
      }
    </div>
  );
};

export default App;
