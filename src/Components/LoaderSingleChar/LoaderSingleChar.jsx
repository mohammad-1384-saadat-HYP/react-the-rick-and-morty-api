import React from "react";
import styles from "./LoaderSingleChar.module.css";

const LoaderSingleChar = () => {
  return (
    <div className={styles.LoaderSingleChar}>
      <div className={styles.LoaderSingleChar_img}>img</div>
      <div className={styles.LoaderSingleChar_details}>
        <span className={styles.LoaderSingleChar_details_name}>name</span>
        <div className={styles.LoaderSingleChar_details_informations}>
          <div className={styles.LoaderSingleChar_details_informations_holder}>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_title
              }
            >
              species:
            </div>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_value
              }
            >
              species
            </div>
          </div>
          <div className={styles.LoaderSingleChar_details_informations_holder}>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_title
              }
            >
              type:
            </div>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_value
              }
            >
              type
            </div>
          </div>
          <div className={styles.LoaderSingleChar_details_informations_holder}>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_title
              }
            >
              status:
            </div>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_value
              }
            >
              status
            </div>
          </div>
          <div className={styles.LoaderSingleChar_details_informations_holder}>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_title
              }
            >
              gender:
            </div>
            <div
              className={
                styles.LoaderSingleChar_details_informations_holder_value
              }
            >
              gender
            </div>
          </div>
        </div>
        <p className={styles.LoaderSingleChar_details_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          dignissimos ipsum, soluta tempora quae maxime illo animi pariatur
          magni aut repellendus quasi optio rem illum, explicabo nisi possimus
          quisquam praesentium!
        </p>
      </div>
      <div className={styles.LoaderSingleChar_relateds}>
        <div className={styles.LoaderSingleChar_relateds_holder}>
          <span className={styles.LoaderSingleChar_relateds_holder_title}>
            borned in:
          </span>
          <span className={styles.LoaderSingleChar_relateds_holder_value}>
            borned in
          </span>
        </div>
        <div className={styles.LoaderSingleChar_relateds_holder}>
          <span className={styles.LoaderSingleChar_relateds_holder_title}>
            first seen in:
          </span>
          <span className={styles.LoaderSingleChar_relateds_holder_value}>
            first seen in
          </span>
        </div>
        <div className={styles.LoaderSingleChar_relateds_holder}>
          <span className={styles.LoaderSingleChar_relateds_holder_title}>
            last seen in:
          </span>
          <span className={styles.LoaderSingleChar_relateds_holder_value}>
            last seen in
          </span>
        </div>
        <div className={styles.LoaderSingleChar_locationLink}>
          <span className={styles.LoaderSingleChar_locationLink_text}>
            go to last location
          </span>
        </div>
        <div className={styles.LoaderSingleChar_episodesHodler}>
          <div className={styles.LoaderSingleChar_episodesHodler_titleHolder}>
            <span
              className={
                styles.LoaderSingleChar_episodesHodler_titleHolder_text
              }
            >
              episodes
            </span>
          </div>
          <div
            className={styles.LoaderSingleChar_episodesHodler_episodesHolder}
          >
            <div
              className={
                styles.LoaderSingleChar_episodesHodler_episodesHolder_episode
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSingleChar;
