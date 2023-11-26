import React from "react";
import styles from "./Display.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
const Display = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <div className={styles.heading}>
          <FontAwesomeIcon className={styles.display} icon={faDisplay} />
          <h2>Display</h2>
        </div>
        <hr />
      </div>
      <div className={styles.toggle_container}>
        <div className={styles.toggle}>
          <h2>Toggle mode</h2>
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={isDarkMode ? true : false}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.toggle}>
          <h2>Notifications</h2>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Display;
