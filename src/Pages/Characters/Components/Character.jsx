import React from "react";
import { Link } from "react-router";
import { funGender, funStatus } from "../../../constants/constans";
import styles from "./Character.module.css";

const Character = ({ data }) => {
  return (
    <Link to={`/characters/character-${data.id}`} className={styles.Character}>
      <div className={styles.Character_imgHolder}>
        <img
          className={styles.Character_imgHolder_img}
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className={styles.Character_details}>
        <div className={styles.Character_details_holder}>
          <span className={styles.Character_details_holder_name}>
            {data.name}
          </span>
        </div>
        <div className={styles.Character_details_holder}>
          <span className={styles.Character_details_holder_title}>gender:</span>
          <div className={styles.Character_details_holder_iconHolder}>
            {funGender(data, styles)}
          </div>
        </div>
        <div className={styles.Character_details_holder}>
          <span className={styles.Character_details_holder_title}>status:</span>
          <div className={styles.Character_details_holder_iconHolder}>
            {funStatus(data, styles)}
          </div>
        </div>
        <div className={styles.Character_details_holder}>
          <span className={styles.Character_details_holder_title}>
            species:
          </span>
          <span className={styles.Character_details_holder_title_species}>
            {data.species}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Character;
