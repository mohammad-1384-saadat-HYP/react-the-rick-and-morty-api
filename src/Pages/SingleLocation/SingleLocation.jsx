import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { funGetIdFromUrl } from "../../utils/utils";
import styles from "./SingleLocation.module.css";

const SingleLocation = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchSingleloc();
  }, []);

  const fetchSingleloc = async () => {
    try {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/location/${funGetIdFromUrl(slug)}`
      );
      if (!result) {
        console.error("failed to get correct response: ", result);
        return;
      }
      console.log(result.data);
      setData(result?.data);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <div className={styles.singleLocation}>
      <h1 className={styles.singleLocation_name}>{data?.name}</h1>
      <div className={styles.singleLocation_type}>
        <h2 className={styles.singleLocation_type_title}>type:</h2>
        <h2 className={styles.singleLocation_type_value}>{data?.type}</h2>
      </div>
      <div className={styles.singleLocation_dimension}>
        <h2 className={styles.singleLocation_dimension_title}>dimension:</h2>
        <h2 className={styles.singleLocation_dimension_value}>
          {data?.dimension}
        </h2>
      </div>
      <div className={styles.singleLocation_residents}>
        <h2 className={styles.singleLocation_residents_title}>residents:</h2>
        <div className={styles.singleLocation_residents_residentsHolder}>
          {data?.residents?.length !== 0 ? (
            data?.residents?.map((url) => (
              <Link
                key={url.split("/").pop()}
                to={`/characters/character-${url.split("/").pop()}`}
                className={styles.singleLocation_residents_residentsHolder_link}
              >
                <span
                  className={
                    styles.singleLocation_residents_residentsHolder_link_title
                  }
                >
                  character:
                </span>
                <span
                  className={
                    styles.singleLocation_residents_residentsHolder_link_value
                  }
                >
                  {url.split("/").pop()}
                </span>
              </Link>
            ))
          ) : (
            <span
              className={styles.singleLocation_residents_residentsHolder_noChar}
            >
              this location have no character
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleLocation;
