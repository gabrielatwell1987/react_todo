import { useState } from "react";
import styles from "./todoform.module.css";

// eslint-disable-next-line react/prop-types
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className={styles.TodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is your grocery item?"
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
