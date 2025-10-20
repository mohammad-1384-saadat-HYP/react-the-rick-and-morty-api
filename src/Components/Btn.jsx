import React from "react";
import { Link } from "react-router";
import styles from "./Btn.module.css";

const Btn = (props) => {
  // if (props.type === "link") {
  //   return (
  //     <Link to={props.address} className={styles.btn}>
  //       {props.children}
  //     </Link>
  //   );
  // }
  // return <button>{props.children}</button>;
  return (
    <div>
      {props.type === "link" ? (
        <Link to={props.address} className={styles.btn}>
          {props.children}
        </Link>
      ) : (
        <button>{props.children}</button>
      )}
    </div>
  );
};

export default Btn;
