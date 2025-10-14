import React from "react";
import LoaderChar from "./LoaderChar";
import LoaderPagination from "./LoaderPagination";
import styles from "./Loader.module.css";

const Loader = () => {
  const showLoaderChars = () =>
    Array.from({ length: 8 }, (emptyValue, i) => <LoaderChar key={i} />);
  return (
    <>
      <div className={styles.characters_container}>{showLoaderChars()}</div>
      <LoaderPagination />
    </>
  );
};

export default Loader;
