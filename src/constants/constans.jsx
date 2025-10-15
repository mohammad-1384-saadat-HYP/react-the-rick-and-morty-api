import { Heart, Skull } from "lucide-react";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";

export const headerMenu = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Characters",
    to: "/characters",
  },
  {
    id: 3,
    label: "Locations",
    to: "/locations",
  },
  {
    id: 4,
    label: "Episodes",
    to: "/episodes",
  },
];

export const funGetIdFromUrl = (slug) => {
  const index = slug.indexOf("-");
  const pageId = slug.slice(index + 1);
  return pageId;
};

export const funGender = (data, styles) => {
  switch (data.gender) {
    case "Female":
      return (
        <FaFemale className={styles.Character_details_holder_iconHolder_icon} />
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

export const funStatus = (data, styles) => {
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
