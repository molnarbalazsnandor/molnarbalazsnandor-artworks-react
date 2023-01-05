import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import ArtCard from "./components/ArtCard";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
    }
  }, []);

  console.log(favorites);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/art/:id"
          element={
            <ArtCard favorites={favorites} setFavorites={setFavorites} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
