import React from "react";
import styles from "./Sidebar.module.css";
import profile from "../../assets/prof.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faGear } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ sidebarStyle, isDarkMode }) => {
  return (
    <div style={sidebarStyle} className={styles.sidebar_container}>
      <div className={styles.info_wrapper}>
        <div className={styles.info_container}>
          <img src={profile} alt="profile_img" />
          <div className={styles.info}>
            <h2 style={{ color: isDarkMode ? "#fff" : "#333" }}>Do-it</h2>
            <p>Daniel Snellberg</p>
          </div>
        </div>
        <hr />
      </div>
      <div className={styles.links_container}>
        <div className={styles.link_container}>
          <div className={styles.link}>
            <FontAwesomeIcon className={styles.calender} icon={faCalendar} />
            <Link
              to="/"
              className={styles.link_text}
              style={{
                color: "#5d5d5d",
                fontWeight: 300,
                textDecoration: "none",
                color: isDarkMode ? "#fff" : "#333",
              }}
            >
              Today's Tasks
            </Link>
          </div>
          <div className={styles.filter_container}>
            <div className={styles.filter}>
              <span></span>
              <h2 style={{ color: isDarkMode ? "#fff" : "#333" }}>Personal</h2>
            </div>
            <div className={styles.filter}>
              <span></span>
              <h2 style={{ color: isDarkMode ? "#fff" : "#333" }}>Freelance</h2>
            </div>
            <div className={styles.filter}>
              <span></span>
              <h2 style={{ color: isDarkMode ? "#fff" : "#333" }}>work</h2>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <FontAwesomeIcon className={styles.gear} icon={faGear} />
          <Link
            to="/settings"
            className={styles.link_text}
            style={{
              color: "#5d5d5d",
              fontWeight: 300,
              textDecoration: "none",
              color: isDarkMode ? "#fff" : "#333",
            }}
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
