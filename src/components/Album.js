import React, { useState } from "react";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  return (
    <div className="album">
      <h3>{album.title}</h3>
      <Link to={`/photos/${album.id}`}>Photos</Link>
    </div>
  );
};

export default Album;
