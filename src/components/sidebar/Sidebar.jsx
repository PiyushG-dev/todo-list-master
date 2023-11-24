import React from "react";
import styles from "./Sidebar.module.css";
import profile from "../../assets/prof.jpg";

const Sidebar = () => {
  return (
    <div className={styles.container}>
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
        <div className={styles.link}>Today tasks</div>
        <div className={styles.link}>Scheduled tasks</div>
        <div className={styles.link}>Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
