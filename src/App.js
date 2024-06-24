import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import AlbumsPage from "./pages/AlbumsPage";
import PhotosPage from "./pages/PhotosPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/albums/:userId" element={<AlbumsPage />} />
          <Route path="/photos/:albumId" element={<PhotosPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
