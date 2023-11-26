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
    { id: 2, task: "Code reviews" },
  ]);

  const colorToggle = ["#ff8977", "#79d2ff", "#ffdb79"];

  const [editItemId, setEditItemId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [currentColor, setCurrentColor] = useState(0);

  const addItem = (task) => {
    setItems([...items, { id: items.length + 1, task: task }]);
  };

  const deleteItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };

  const editItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setEditItemId(id);
    setEditedTask(itemToEdit.task);
  };

  const handleColorToggle = () => {
    setCurrentColor((prev) => (prev + 1) % colorToggle.length);
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
      <TodoForm
        addItem={addItem}
        setItems={setItems}
        editedTask={editedTask}
        editItemId={editItemId}
        setEditedTask={setEditedTask}
        setEditItemId={setEditItemId}
        handleColorToggle={handleColorToggle}
      />
      <TodoList
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
        editItemId={editItemId}
        editedTask={editedTask}
        color={colorToggle[currentColor]}
      />
    </div>
  );
};

export default TodayTask;
