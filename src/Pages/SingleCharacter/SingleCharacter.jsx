import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loading from "../../Components/Loading";
import axios from "axios";
import {
  funGetIdFromUrl,
  funGender,
  funStatus,
} from "../../constants/constans";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import LoaderSingleChar from "../../Components/LoaderSingleChar/LoaderSingleChar";
import styles from "./SingleCharacter.module.css";
import { DivideSquareIcon } from "lucide-react";

const SingleCharacter = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetchSingleChar();
  }, []);

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
      fetchCharlocation(result.data.location.url);
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
      // console.log(result.data);
      setEpisode(result.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const fetchCharlocation = async (url) => {
    try {
      const result = await axios.get(url);
      if (!result) {
        console.error("failed to get correct response: ", result);
        return;
      }
      // console.log(result.data);
      setLocation(result.data);
    } catch (error) {
      console.error("error", error);
    }
  };

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
            <div className={styles.singleCharacter_details_informatios}>
              <span className={styles.singleCharacter_details_informatios_name}>
                {data.name}
              </span>
              <div
                className={styles.singleCharacter_details_informatios_states}
              >
                <div
                  className={
                    styles.singleCharacter_details_informatios_states_state
                  }
                >
                  <span
                    className={
                      styles.singleCharacter_details_informatios_states_state_title
                    }
                  >
                    species:
                  </span>
                  <span
                    className={
                      styles.singleCharacter_details_informatios_states_state_value
                    }
                  >
                    {data.species}
                  </span>
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informatios_states_state
                  }
                >
                  <span
                    className={
                      styles.singleCharacter_details_informatios_states_state_title
                    }
                  >
                    status:
                  </span>
                  <div
                    className={
                      styles.singleCharacter_details_informatios_states_state_iconHolder
                    }
                  >
                    {funStatus(data)}
                  </div>
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informatios_states_state
                  }
                >
                  <span
                    className={
                      styles.singleCharacter_details_informatios_states_state_title
                    }
                  >
                    type:
                  </span>
                  <span
                    className={
                      styles.singleCharacter_details_informatios_states_state_value
                    }
                  >
                    {data.type ? data.type : "unknown"}
                  </span>
                </div>
                <div
                  className={
                    styles.singleCharacter_details_informatios_states_state
                  }
                >
                  <span
                    className={
                      styles.singleCharacter_details_informatios_states_state_title
                    }
                  >
                    gender:
                  </span>
                  <div
                    className={
                      styles.singleCharacter_details_informatios_states_state_iconHolder
                    }
                  >
                    {funGender(data)}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.singleCharacter_details_specifications}>
              <div
                className={
                  styles.singleCharacter_details_specifications_specificate
                }
              >
                <span
                  className={
                    styles.singleCharacter_details_specifications_specificate_title
                  }
                >
                  borned in:
                </span>
                <span
                  className={
                    styles.singleCharacter_details_specifications_specificate_value
                  }
                >
                  {data.origin.url ? data.origin.name : "unknown"}
                </span>
              </div>
              <div
                className={
                  styles.singleCharacter_details_specifications_specificate
                }
              >
                <span
                  className={
                    styles.singleCharacter_details_specifications_specificate_title
                  }
                >
                  first seen in:
                </span>
                <Link
                  to={`/episodes/episode-${episode.id}`}
                  className={
                    styles.singleCharacter_details_specifications_specificate_link
                  }
                >
                  {episode.name}
                </Link>
              </div>
              <div
                className={
                  styles.singleCharacter_details_specifications_specificate
                }
              >
                <span
                  className={
                    styles.singleCharacter_details_specifications_specificate_title
                  }
                >
                  last seen in:
                </span>
                {data.location.url ? (
                  <Link
                    to={`/locations/location-${location.id}`}
                    className={
                      styles.singleCharacter_details_specifications_specificate_link
                    }
                  >
                    {location.name}
                  </Link>
                ) : (
                  <span
                    className={
                      styles.singleCharacter_details_specifications_specificate_value
                    }
                  >
                    unknown
                  </span>
                )}
              </div>
            </div>
            <div className={styles.singleCharacter_details_description}>
              <p className={styles.singleCharacter_details_description_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dignissimos ipsum, soluta tempora quae maxime illo animi
                pariatur magni aut repellendus quasi optio rem illum, explicabo
                nisi possimus quisquam praesentium!
              </p>
            </div>
            <div className={styles.singleCharacter_details_charEpisodes}>
              <span
                className={styles.singleCharacter_details_charEpisodes_title}
              >
                episodes:
              </span>
              <div
                className={styles.singleCharacter_details_charEpisodes_episodes}
              >
                {data.episode.map((url) => (
                  <Link
                    to={`/episodes/episode-${url.split("/").pop()}`}
                    key={url.split("/").pop()}
                    className={
                      styles.singleCharacter_details_charEpisodes_episodes_episode
                    }
                  >
                    <span
                      className={
                        styles.singleCharacter_details_charEpisodes_episodes_episode_static
                      }
                    >
                      episode:
                    </span>
                    <span
                      className={
                        styles.singleCharacter_details_charEpisodes_episodes_episode_dynamic
                      }
                    >
                      {url.split("/").pop()}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {/* <LoaderSingleChar /> */}
    </div>
  );
};

export default SingleCharacter;
