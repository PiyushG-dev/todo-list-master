import React from "react";
import styles from "./TodoList.module.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ items, deleteItem }) => {
  return (
    <div className={styles.list_container}>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            task={item.task}
            deleteItem={() => deleteItem(item.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
