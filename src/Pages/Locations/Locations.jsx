import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Components/Loading";
import { scrollToTop } from "../../utils/utils";
import Pagination from "../../Components/Pagination";
import Item from "../../Components/Item";
import styles from "./Locations.module.css";

const Locations = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLocations();
    scrollToTop();
  }, [pageNum]);

  const fetchLocations = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${pageNum}`
      );
      const { results, info } = result.data;
      if (!results || !info) {
        console.error("failed to get correct response: ", result);
        return;
      }
      // console.log(results);
      // console.log(info);
      setResults(results);
      setInfo(info);
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
    <div className={styles.locations}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.locations_itemsHolder}>
            {results.map((result) => (
              <Item key={result.id} type="location" data={result} />
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
  );
};

export default Locations;
