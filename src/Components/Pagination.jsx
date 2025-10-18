import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import styles from "./Pagination.module.css";

const Pagination = ({ info, page, minus, plus, change }) => {
  const createPages = () => {
    const pages = [];
    let isAlreay = false;
    for (let count = 1; count <= info.pages; count++) {
      if (
        count === 1 ||
        (page - 2 <= count && count < page) ||
        count === page ||
        (page < count && count <= page + 2) ||
        count === info.pages
      ) {
        pages.push(pagesHtml(count, pages.length + 1));
        isAlreay = false;
      } else {
        if (!isAlreay) {
          pages.push(pagesHtml("...", pages.length + 1));
          isAlreay = true;
        }
      }
    }
    return pages;
  };

  const pagesHtml = (count, key) => (
    <button
      key={key}
      className={
        count === "..."
          ? styles.characters_content_pagination_pagesHolder_emptyHolder
          : `${styles.characters_content_pagination_pagesHolder_countHolder} ${
              count === page ? styles.currentPage : ""
            }`
      }
      data-value={count}
      onClick={count !== "..." ? changePageNum : undefined}
    >
      <span
        className={
          count === "..."
            ? styles.characters_content_pagination_pagesHolder_emptyHolder_count
            : styles.characters_content_pagination_pagesHolder_countHolder_count
        }
      >
        {count}
      </span>
    </button>
  );

  const changePageNum = (e) => {
    const num = Number(e.currentTarget.dataset.value);
    change(num);
  };

  return (
    <div className={styles.characters_content_pagination}>
      <button
        className={
          info.prev
            ? styles.characters_content_pagination_btn
            : styles.unActiveBtn
        }
        onClick={info.prev ? minus : undefined}
      >
        <div className={styles.characters_content_pagination_btn_iconHolder}>
          <FaChevronLeft
            className={styles.characters_content_pagination_btn_iconHolder_icon}
          />
        </div>
        <span className={styles.characters_content_pagination_btn_lable}>
          Previous
        </span>
      </button>
      <div className={styles.characters_content_pagination_pagesHolder}>
        {createPages()}
      </div>
      <button
        className={
          info.next
            ? styles.characters_content_pagination_btn
            : styles.unActiveBtn
        }
        onClick={info.next ? plus : undefined}
      >
        <span className={styles.characters_content_pagination_btn_lable}>
          Next
        </span>
        <div className={styles.characters_content_pagination_btn_iconHolder}>
          <FaChevronRight
            className={styles.characters_content_pagination_btn_iconHolder_icon}
          />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
