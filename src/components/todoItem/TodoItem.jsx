import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ task, deleteItem }) => {
  return (
    <div className={styles.item_container}>
      <div className={styles.item}>
        <span></span>
        <h1>{task}</h1>
      </div>
      <button onClick={deleteItem}>remove</button>
    </div>
  );
};

export default TodoItem;
