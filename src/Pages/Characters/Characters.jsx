import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Character from "../../Components/Character";
import Pagination from "../../Components/Pagination";
import { scrollToTop } from "../../constants/constans";
import styles from "./Characters.module.css";

const Characters = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
    scrollToTop();
  }, [pageNum]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${pageNum}`
      );
      const { info, results } = result.data;
      if (!info || !results) {
        console.error("failed to get correct response: ", info, results);
        return;
      }
      setInfo(info);
      setResults(results);
    } catch (error) {
      console.error("error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const pageMinus = () => setPageNum((num) => num - 1);

  const pagePlus = () => setPageNum((num) => num + 1);

  const pageChange = (num) => setPageNum(num);

  return (
    <div className={styles.characters}>
      <div className={styles.characters_content}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.characters_content_charactersHolder}>
              {results.map((result) => (
                <Character key={result.id} data={result} />
              ))}
            </div>
            <Pagination
              info={info}
              page={pageNum}
              minus={pageMinus}
              plus={pagePlus}
              change={pageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Characters;
