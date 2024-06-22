import React, { useState } from "react";
import Album from "./Album";
import "./User.css";

const User = ({ user }) => {
  const [albums, setAlbums] = useState([]);
  const [showAlbums, setShowAlbums] = useState(false);

  const fetchAlbums = () => {
    if (!showAlbums) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
        .then((response) => response.json())
        .then((data) => setAlbums(data))
        .catch((error) => console.error("Error fetching albums:", error));
    }
    setShowAlbums(!showAlbums);
  };

  return (
    <div className="user">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={fetchAlbums}>
        {showAlbums ? "Hide Albums" : "Show Albums"}
      </button>
      {showAlbums && (
        <div className="albums">
          {albums.map((album) => (
            <Album key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
