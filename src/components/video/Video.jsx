import React from "react";
import { useParams } from "react-router-dom";
import "./Video.scss";

const Video = () => {
  let { id } = useParams();
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        allowFullScreen
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Video;
