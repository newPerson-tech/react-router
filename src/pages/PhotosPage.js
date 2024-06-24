import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Photo from "../components/Photo";

const PhotosPage = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotosPage;
