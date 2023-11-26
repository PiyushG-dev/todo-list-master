import React from "react";
import styles from "./css/Settings.module.css";
import Display from "../components/display/Display";
import { useState } from "react";

const Settings = ({ toggleDarkMode, appStyle, isDarkMode }) => {
  return (
    <div style={appStyle} className={styles.wrapper}>
      <div className={styles.container}>
        <Display toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Settings;
