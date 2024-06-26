import React from "react";

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
