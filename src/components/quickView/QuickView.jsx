import React from "react";
import "./QuickView.scss";
import CancelIcon from "@mui/icons-material/Cancel";

const QuickView = ({
  popup,
  handlePopup,
  bannerStyle,
  movie,
  popupStatut,
  truncateText,
}) => {
  return (
    <div className={`quickView ${popupStatut && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickview__content">
          <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}{" "}
          </h3>
          <p>{movie?.overview}</p>
        </div>
        <button className="quickView__close" onClick={handlePopup}>
          <CancelIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default QuickView;
