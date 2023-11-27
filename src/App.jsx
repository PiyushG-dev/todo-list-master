import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TodayTask from "./pages/TodayTask";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const appStyle = {
    backgroundColor: isDarkMode ? "#6d33b3" : "#b274ff",
    // color: isDarkMode ? "#fff" : "#333",
    transition: "background-color 0.3s, color 0.3s",
  };

  const sidebarStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    transition: "background-color 0.3s, color 0.3s",
    margin: ".5rem 0rem",
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar sidebarStyle={sidebarStyle} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<TodayTask appStyle={appStyle} />} />
          <Route
            path="/settings"
            element={
              <Settings
                appStyle={appStyle}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
