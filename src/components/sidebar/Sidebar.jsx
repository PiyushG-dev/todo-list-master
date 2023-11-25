import React from "react";
import styles from "./Sidebar.module.css";
import profile from "../../assets/prof.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarAlt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.info_wrapper}>
        <div className={styles.info_container}>
          <img src={profile} alt="profile_img" />
          <div className={styles.info}>
            <h2>Do-it</h2>
            <p>Daniel Snellberg</p>
          </div>
        </div>
        <hr />
      </div>
      <div className={styles.links_container}>
        <div className={styles.link_container}>
          <div className={styles.link}>
            <FontAwesomeIcon className={styles.calender} icon={faCalendar} />
            <h2>Today Tasks</h2>
          </div>
          <div className={styles.filter_container}>
            <div className={styles.filter}>
              <span></span>
              <h2>Personal</h2>
            </div>
            <div className={styles.filter}>
              <span></span>
              <h2>Freelance</h2>
            </div>
            <div className={styles.filter}>
              <span></span>
              <h2>work</h2>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <FontAwesomeIcon
            className={styles.calenderAlt}
            icon={faCalendarAlt}
          />
          <h2>Scheduled Tasks</h2>
        </div>
        <div className={styles.link}>
          <FontAwesomeIcon className={styles.gear} icon={faGear} />
          <h2>Settings</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
