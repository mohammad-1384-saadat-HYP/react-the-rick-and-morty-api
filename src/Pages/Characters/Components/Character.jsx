import React from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { Heart, Skull } from "lucide-react";
import styles from "./Character.module.css";

const Character = ({ data }) => {
  const genderFun = () => {
    switch (data.gender) {
      case "Female":
        return (
          <FaFemale
            className={styles.Character_details_holder_iconHolder_icon}
          />
        );
      case "Male":
        return (
          <FaMale className={styles.Character_details_holder_iconHolder_icon} />
        );
      case "unknown":
      case "Genderless":
        return (
          <FaQuestion
            className={styles.Character_details_holder_iconHolder_icon}
          />
        );
      default:
        break;
    }
  };

  const statusFun = () => {
    switch (data.status) {
      case "Alive":
        return (
          <Heart
            className={`${styles.Character_details_holder_iconHolder_icon} ${styles.heart}`}
          />
        );
      case "Dead":
        return (
          <Skull
            className={`${styles.Character_details_holder_iconHolder_icon} ${styles.skull}`}
          />
        );
      case "unknown":
        return (
          <FaQuestion
            className={`${styles.Character_details_holder_iconHolder_icon} ${styles.question}`}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className={styles.Character}>
      <div className={styles.Character_imgHolder}>
        <img
          className={styles.Character_imgHolder_img}
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className={styles.Character_details}>
        <div className={styles.Character_details_holder}>
          <h3 className={styles.Character_details_holder_name}>{data.name}</h3>
        </div>
        <div className={styles.Character_details_holder}>
          <h4 className={styles.Character_details_holder_title}>gender:</h4>
          <div className={styles.Character_details_holder_iconHolder}>
            {genderFun()}
          </div>
        </div>
        <div className={styles.Character_details_holder}>
          <h4 className={styles.Character_details_holder_title}>status:</h4>
          <div className={styles.Character_details_holder_iconHolder}>
            {statusFun()}
          </div>
        </div>
        <div className={styles.Character_details_holder}>
          <h4 className={styles.Character_details_holder_title}>species:</h4>
          <h3>{data.species}</h3>
        </div>
      </div>
    </div>
  );
};

export default Character;
