import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <div className="heading">
          <h2>Today main focus</h2>
          <h1>Design team meeting</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
