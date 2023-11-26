import React from "react";
import styles from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ task, deleteItem, editItem, color }) => {
  const circleStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: color,
  };

  return (
    <div className={styles.item_container}>
      <div className={styles.item}>
        <span style={circleStyle}></span>
        <h1>{task}</h1>
      </div>
      <div className={styles.item_features}>
        <FontAwesomeIcon
          onClick={deleteItem}
          className={styles.delete}
          icon={faDeleteLeft}
        />
        <FontAwesomeIcon
          onClick={editItem}
          icon={faEdit}
          className={styles.edit}
        />
      </div>
    </div>
  );
};

export default TodoItem;
