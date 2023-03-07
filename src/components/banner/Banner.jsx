import React, { useEffect, useState } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import axios from "axios";
import requests from "../../config/Request.js";
import QuickView from "../quickView/QuickView";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handlePopup() {
    setPopup(!popup);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No Description";
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon />
            Lecture
          </button>
          <button className="banner__button" onClick={handlePopup}>
            <HelpCenterIcon />
            Plus D'infos
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        handlePopup={handlePopup}
        popupStatut={popup}
        truncateText={truncateText}
      />
    </header>
  );
};

export default Banner;
