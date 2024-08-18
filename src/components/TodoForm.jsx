import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is your task?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button type="submit" className="todo-btn">
        Add Item
      </button>
    </form>
  );
}

export default TodoForm;
