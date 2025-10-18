import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Character from "../../Components/Character";
import Pagination from "../../Components/Pagination";
import styles from "./Characters.module.css";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const [pageNum, setPageNum] = useState(1);

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

  const scrollToTop = () => window.scrollTo({ top: 0 });

  useEffect(() => {
    fetchData();
    scrollToTop();
  }, [pageNum]);

  const pageminus = () => setPageNum((num) => num - 1);

  const pagePlus = () => setPageNum((num) => num + 1);

  const pagechange = (num) => setPageNum(num);

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
              minus={pageminus}
              plus={pagePlus}
              change={pagechange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Characters;
