import React from "react";
import styles from "./css/TodayTask.module.css";
import { useState } from "react";
import TodoForm from "../components/todoForm/TodoForm";
import TodoList from "../components/todoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const TodayTask = () => {
  const [items, setItems] = useState([
    { id: 1, task: "Design team meeting" },
    { id: 2, task: "Make button design" },
    { id: 3, task: "Investor meeting" },
  ]);

  const addItem = (task) => {
    setItems([...items, { id: items.length + 1, task: task }]);
  };

  const deleteItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faSnapchat} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div className={styles.heading}>
        <h2>What do you have planned for the day?</h2>
      </div>
      <TodoForm addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default TodayTask;
