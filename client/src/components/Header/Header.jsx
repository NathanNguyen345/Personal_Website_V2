import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <Logo />
    </header>
  );
}

export default Header;
