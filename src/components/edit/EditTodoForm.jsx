/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./edittodoform.module.css";

function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className={styles.TodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.TodoInput}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button type="submit" className={styles.TodoBtn}>
        Update Item
      </button>
    </form>
  );
}

export default EditTodoForm;
