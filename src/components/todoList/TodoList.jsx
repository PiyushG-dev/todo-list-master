import React from "react";
import styles from "./TodoList.module.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({
  items,
  deleteItem,
  editItem,
  editedTask,
  editItemId,
  color,
}) => {
  return (
    <div className={styles.list_container}>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            task={editItemId === item.id ? editedTask : item.task}
            deleteItem={() => deleteItem(item.id)}
            editItem={() => editItem(item.id)}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
