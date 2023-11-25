import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TodayTask from "./pages/TodayTask";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<TodayTask />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
