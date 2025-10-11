import React from "react";
import { Link } from "react-router";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.home} page`}>
      <h1 className={styles.home_welcomeText}>
        Welcome! Explore the data with The Rick and Morty API.
      </h1>
      <p className={styles.home_description}>
        This website lets you explore data from The Rick and Morty API in a
        clean, organized, and interactive way. You can view structured tables of
        characters, episodes, and locations — all neatly arranged for easy
        navigation. You’re also in control: choose how many items to display at
        once and quickly access related information. For example, from the
        Characters page, you can instantly see each character’s associated
        episodes and locations with just a single click.
      </p>
      <div className={styles.home_pages}>
        <h2 className={styles.home_pages_title}>Explore the data:</h2>
        <div className={styles.home_pages_btns}>
          <Link to="/characters" className={styles.home_pages_btns_link}>
            <span className={styles.home_pages_btns_link_name}>Characters</span>
          </Link>
          <Link to="/locations" className={styles.home_pages_btns_link}>
            <span className={styles.home_pages_btns_link_name}>Locations</span>
          </Link>
          <Link to="/episodes" className={styles.home_pages_btns_link}>
            <span className={styles.home_pages_btns_link_name}>Episodes</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
