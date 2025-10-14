import React from "react";
import styles from "./LoaderPagination.module.css";

const LoaderPagination = () => {
  return (
    <div className={styles.LoaderPagination}>
      <div
        className={`${styles.LoaderPagination_btnSkeleton} ${styles.skeleton}`}
      ></div>
      <div className={styles.LoaderPagination_pagesHolder}>
        <div
          className={`${styles.LoaderPagination_pagesHolder_circleSkeleton} ${styles.skeleton}`}
        ></div>
        <div
          className={`${styles.LoaderPagination_pagesHolder_circleSkeleton} ${styles.skeleton}`}
        ></div>
        <div
          className={`${styles.LoaderPagination_pagesHolder_circleSkeleton} ${styles.skeleton}`}
        ></div>
        <div
          className={`${styles.LoaderPagination_pagesHolder_circleSkeleton} ${styles.skeleton}`}
        ></div>
        <div
          className={`${styles.LoaderPagination_pagesHolder_circleSkeleton} ${styles.skeleton}`}
        ></div>
      </div>
      <div
        className={`${styles.LoaderPagination_btnSkeleton} ${styles.skeleton}`}
      ></div>
    </div>
  );
};

export default LoaderPagination;
