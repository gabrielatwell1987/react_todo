import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import styles from "./todo.module.css";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className={styles.Todo}>
      <div className={styles.cursor}>
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </p>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faPencil}
          onClick={() => editTodo(task.id)}
          className={styles.Cursor}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className={styles.Cursor}
        />
      </div>
    </div>
  );
}

export default Todo;
