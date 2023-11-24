import React from "react";
import styles from "./TodoForm.module.css";
import { useState } from "react";

const TodoForm = ({ addItem }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <input
        type="text"
        placeholder="what is your next task?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">add task</button>
    </form>
  );
};

export default TodoForm;
