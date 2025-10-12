import React from "react";
import { Link, useLocation } from "react-router";
import styles from "./Header.module.css";
import { headerMenu } from "../constants/constants";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.header}>
      <Link className={styles.header_logoHolder} to="/">
        <span className={styles.header_logoHolder_text}>
          The Rick and Morty API
        </span>
      </Link>
      <div className={styles.header_paginationHolder}>
        {headerMenu.map((item) => {
          return (
            <Link
              key={item?.id}
              to={item?.to}
              className={`${styles.header_paginationHolder_link} ${
                pathname === item?.to ? "active_page" : ""
              }`}
            >
              <span className={styles.header_paginationHolder_link_name}>
                {item?.label}
              </span>
            </Link>
          );
        })}
        {/* <Link to="/" className={`${styles.header_paginationHolder_link}`}>
          <span className={styles.header_paginationHolder_link_name}>Home</span>
        </Link>
        <Link to="/characters" className={styles.header_paginationHolder_link}>
          <span className={styles.header_paginationHolder_link_name}>
            Characters
          </span>
        </Link>
        <Link to="/locations" className={styles.header_paginationHolder_link}>
          <span className={styles.header_paginationHolder_link_name}>
            Locations
          </span>
        </Link>
        <Link to="/episodes" className={styles.header_paginationHolder_link}>
          <span className={styles.header_paginationHolder_link_name}>
            Episodes
          </span>
        </Link> */}
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
