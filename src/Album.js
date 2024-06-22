import React, { useState } from "react";
import Photo from "./Photo";
import "./Album.css";

const Album = ({ album }) => {
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);

  const fetchPhotos = () => {
    if (!showPhotos) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.error("Error fetching photos:", error));
    }
    setShowPhotos(!showPhotos);
  };

  return (
    <div className="album">
      <h3>{album.title}</h3>
      <button onClick={fetchPhotos}>
        {showPhotos ? "Hide Photos" : "Show Photos"}
      </button>
      {showPhotos && (
        <div className="photos">
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Album;
