import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import { useState } from "react";

const App = () => {
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

  console.log(items);

  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <div className="heading">
          <h2>Today main focus</h2>
          <h1>Design team meeting</h1>
        </div>
        <TodoForm addItem={addItem} />
        <TodoList items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default App;
