import React from 'react';
import {Link} from "react-router";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link className={styles.header_logoHolder} to="/">
                <span className={styles.header_logoHolder_text}>JSONPlaceholder - Show</span>
            </Link>
            <div className={styles.header_paginationHolder}>
                <Link to="/" className={`${styles.header_paginationHolder_link} active_page`}>
                    <span className={styles.header_paginationHolder_link_name}>Home</span>
                </Link>
            </div>
            <a href="https://jsonplaceholder.typicode.com/" className={styles.header_MainSiteHolder}>
                <span className={styles.header_MainSiteHolder_name}>Go to Main Site</span>
            </a>
        </div>
    );
};

export default Header