import React from "react";
import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.header_logoHolder} to="/">
        <span className={styles.header_logoHolder_text}>
          The Rick and Morty API
        </span>
      </Link>
      <div className={styles.header_paginationHolder}>
        <Link
          to="/"
          className={`${styles.header_paginationHolder_link} active_page`}
        >
          <span className={styles.header_paginationHolder_link_name}>Home</span>
        </Link>
        <Link to="/characters" className={styles.header_paginationHolder_link}>
          <span className={styles.header_paginationHolder_link_name}>
            Characters
          </span>
        </Link>
        <Link to="/episodes" className={styles.header_paginationHolder_link}>
          <span className={styles.header_paginationHolder_link_name}>
            Episodes
          </span>
        </Link>
        <Link to="/locations" className={styles.header_paginationHolder_link}>
          <span className={styles.header_paginationHolder_link_name}>
            Locations
          </span>
        </Link>
      </div>
      <a
        href="https://rickandmortyapi.com/"
        className={styles.header_MainSiteHolder}
        target="_blank"
      >
        <span className={styles.header_MainSiteHolder_name}>
          Go to Main Site
        </span>
      </a>
    </div>
  );
};

export default Header;
