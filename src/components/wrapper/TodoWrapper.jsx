import { useState, useEffect } from "react";
import TodoForm from "../form/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "../todo/Todo";
import EditTodoForm from "../edit/EditTodoForm";
import styles from "./todowrapper.module.css";

uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const addTodo = (todo) => {
    persistData([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <div className={styles.TodoWrapper}>
      <h1 className={styles.title}>Shopping List</h1>

      <img src="groceries.webp" alt="groceries" width={250} />

      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
