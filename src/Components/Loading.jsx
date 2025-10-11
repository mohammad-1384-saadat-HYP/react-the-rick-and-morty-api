import React from "react";
import { Loader } from "lucide-react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_content}>
        <div className={styles.loading_content_iconHolder}>
          <Loader className={styles.loading_content_iconHolder_icon} />
        </div>
        <h1 className={styles.loading_content_text}>Loading</h1>
      </div>
    </div>
  );
};

export default Loading;
