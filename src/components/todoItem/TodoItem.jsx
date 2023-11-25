import React from "react";
import styles from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ task, deleteItem }) => {
  return (
    <div className={styles.item_container}>
      <div className={styles.item}>
        <span></span>
        <h1>{task}</h1>
      </div>
      <div className={styles.item_features}>
        <FontAwesomeIcon
          onClick={deleteItem}
          className={styles.delete}
          icon={faDeleteLeft}
        />
      </div>
    </div>
  );
};

export default TodoItem;
