import React from "react";
import styles from "./TodoForm.module.css";
import { useState } from "react";

const TodoForm = ({
  addItem,
  editedTask,
  editItemId,
  setEditedTask,
  setItems,
  setEditItemId,
  handleColorToggle,
}) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      addItem(task);
    } else {
      alert("fill all the boxes");
    }
    setTask("");
  };

  const saveEdit = (e) => {
    e.preventDefault();
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editItemId ? { ...item, task: editedTask } : item
      )
    );
    setEditItemId(null);
    setEditedTask("");
  };

  return (
    <form
      onSubmit={editItemId ? saveEdit : handleSubmit}
      className={styles.form_container}
    >
      <input
        type="text"
        placeholder="what is your next task?"
        value={editItemId ? editedTask : task}
        onChange={
          editItemId
            ? (e) => setEditedTask(e.target.value)
            : (e) => setTask(e.target.value)
        }
      />
      <div className={styles.features}>
        <button type="submit">{editItemId ? "edit task" : "add task"}</button>
        <div onClick={handleColorToggle} className={styles.task_type}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
