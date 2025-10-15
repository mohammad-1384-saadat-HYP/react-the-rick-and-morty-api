import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../Components/Loading";
import axios from "axios";
import { funGetIdFromUrl } from "../../constants/constans";

import styles from "./SingleCharacter.module.css";

const SingleCharacter = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [episodeName, setEpisodeName] = useState("");

  const fetchSingleChar = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character/${funGetIdFromUrl(slug)}`
      );
      if (!result) {
        console.error("failed to get correct response: ", result);
        return;
      }
      // console.log(result.data);
      setData(result.data);
      fetchCharFirstEpisode(result.data.episode[0]);
    } catch (error) {
      console.error("error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCharFirstEpisode = async (url) => {
    try {
      const result = await axios.get(url);
      if (!result) {
        console.error("failed to get correct response: ", result);
        return;
      }
      console.log(result.data);
      setEpisodeName(result.data.name);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchSingleChar();
  }, []);

  return (
    <div className={styles.singleCharacter}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.singleCharacter_imgHolder}>
            <img
              src={
                data.image
                  ? data.image
                  : "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
              }
              alt={data.name}
              className={styles.singleCharacter_imgHolder_img}
            />
          </div>
          <div className={styles.singleCharacter_details}>
            <span className={styles.singleCharacter_details_name}>
              {data.name}
            </span>
            <div className={styles.singleCharacter_details_informations}>
              <div
                className={styles.singleCharacter_details_informations_holder}
              >
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_title
                  }
                >
                  species:
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_value
                  }
                >
                  {data.species}
                </div>
              </div>
              <div
                className={styles.singleCharacter_details_informations_holder}
              >
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_title
                  }
                >
                  type:
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_value
                  }
                >
                  {data.type ? data.type : "unknown"}
                </div>
              </div>
              <div
                className={styles.singleCharacter_details_informations_holder}
              >
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_title
                  }
                >
                  status:
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_value
                  }
                >
                  {data.status}
                </div>
              </div>
              <div
                className={styles.singleCharacter_details_informations_holder}
              >
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_title
                  }
                >
                  gender:
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informations_holder_value
                  }
                >
                  {data.gender}
                </div>
              </div>
            </div>
            <p className={styles.singleCharacter_details_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dignissimos ipsum, soluta tempora quae maxime illo animi pariatur
              magni aut repellendus quasi optio rem illum, explicabo nisi
              possimus quisquam praesentium!
            </p>
          </div>
          <div className={styles.singleCharacter_relateds}>
            <div className={styles.singleCharacter_relateds_holder}>
              <span className={styles.singleCharacter_relateds_holder_title}>
                borned in:
              </span>
              <span className={styles.singleCharacter_relateds_holder_value}>
                {data.origin.url ? data.origin.name : "unknown"}
              </span>
            </div>
            <div className={styles.singleCharacter_relateds_holder}>
              <span className={styles.singleCharacter_relateds_holder_title}>
                first seen in:
              </span>
              <span className={styles.singleCharacter_relateds_holder_value}>
                {episodeName}
              </span>
            </div>
            <div className={styles.singleCharacter_relateds_holder}>
              <span className={styles.singleCharacter_relateds_holder_title}>
                last seen in:
              </span>
              <span className={styles.singleCharacter_relateds_holder_value}>
                {data.location.url ? data.location.name : "unknown"}
              </span>
            </div>
            <div className={styles.singleCharacter_relateds_btnHolder}>
              <button className={styles.singleCharacter_relateds_btnHolder_btn}>
                episodes
              </button>
              <button className={styles.singleCharacter_relateds_btnHolder_btn}>
                locations
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCharacter;
