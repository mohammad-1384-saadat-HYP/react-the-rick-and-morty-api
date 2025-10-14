import React from "react";
import { Link, useLocation } from "react-router";
import { headerMenu } from "../constants/constants";
import styles from "./Header.module.css";

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
