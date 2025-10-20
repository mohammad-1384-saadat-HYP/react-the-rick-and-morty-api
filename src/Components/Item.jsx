import React from "react";
import { Link } from "react-router";
import styles from "./Item.module.css";

const Item = ({ type, data }) => {
  return (
    <Link
      to={
        type === "location"
          ? `/locations/location-${data.id}`
          : `/episodes/episode-${data.id}`
      }
      key={data.id}
      className={`${styles.item} ${
        type === "location" ? styles.location : styles.episode
      }`}
    >
      <span className={styles.item_name}>{data.name}</span>
      {type === "location" ? (
        <div className={styles.item_type}>
          <span className={styles.item_type_title}>type:</span>
          <span className={styles.item_type_value}>{data.type}</span>
        </div>
      ) : (
        <span className={styles.item_episode}>{data.episode}</span>
      )}
      {type === "location" ? (
        <div className={styles.item_dimension}>
          <span className={styles.item_dimension_title}>dimension:</span>
          <span className={styles.item_dimension_value}>{data.dimension}</span>
        </div>
      ) : (
        <div className={styles.item_airData}>
          <span className={styles.item_airData_title}>air_data:</span>
          <span className={styles.item_airData_value}>{data.air_data}</span>
        </div>
      )}
    </Link>
  );
};

export default Item;
