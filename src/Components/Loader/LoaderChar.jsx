import React from "react";
import styles from "./LoaderChar.module.css";

const LoaderChar = () => {
  return (
    <div className={styles.loaderChar}>
      <div className={styles.loaderChar_imgHolder}>
        <div
          className={`${styles.loaderChar_imgHolder_imgSkeleton} ${styles.skeleton}`}
        ></div>
      </div>
      <div className={styles.loaderChar_details}>
        <div className={styles.loaderChar_details_holder}>
          <div
            className={`${styles.loaderChar_details_holder_nameSkeleton} ${styles.skeleton}`}
          ></div>
        </div>
        <div className={styles.loaderChar_details_holder}>
          <div
            className={`${styles.loaderChar_details_holder_titleSkeleton} ${styles.skeleton}`}
          ></div>
          <div
            className={`${styles.loaderChar_details_holder_circleSkeleton} ${styles.skeleton}`}
          ></div>
        </div>
        <div className={styles.loaderChar_details_holder}>
          <div
            className={`${styles.loaderChar_details_holder_titleSkeleton} ${styles.skeleton}`}
          ></div>
          <div
            className={`${styles.loaderChar_details_holder_circleSkeleton} ${styles.skeleton}`}
          ></div>
        </div>
        <div className={styles.loaderChar_details_holder}>
          <div
            className={`${styles.loaderChar_details_holder_titleSkeleton} ${styles.skeleton}`}
          ></div>
          <div
            className={`${styles.loaderChar_details_holder_textSkeleton} ${styles.skeleton}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderChar;
