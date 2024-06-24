import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "../components/Album";

const AlbumsPage = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [userId]);

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumsPage;
