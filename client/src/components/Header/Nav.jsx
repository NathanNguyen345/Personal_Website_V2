import React from "react";
import styles from "./Header.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>Experience</li>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
