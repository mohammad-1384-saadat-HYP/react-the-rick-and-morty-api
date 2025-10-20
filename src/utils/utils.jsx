import { Heart, Skull } from "lucide-react";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import styles from "./utils.module.css";

export const funGetIdFromUrl = (slug) => {
  const index = slug.indexOf("-");
  const pageId = slug.slice(index + 1);
  return pageId;
};

export const funGender = (data) => {
  switch (data.gender) {
    case "Female":
      return <FaFemale className={styles.icon} />;
    case "Male":
      return <FaMale className={styles.icon} />;
    case "unknown":
    case "Genderless":
      return <FaQuestion className={styles.icon} />;
    default:
      break;
  }
};

export const funStatus = (data) => {
  switch (data.status) {
    case "Alive":
      return <Heart className={`${styles.icon} ${styles.heart}`} />;
    case "Dead":
      return <Skull className={`${styles.icon} ${styles.skull}`} />;
    case "unknown":
      return <FaQuestion className={`${styles.icon} ${styles.question}`} />;
    default:
      break;
  }
};

export const scrollToTop = () => window.scrollTo({ top: 0 });
