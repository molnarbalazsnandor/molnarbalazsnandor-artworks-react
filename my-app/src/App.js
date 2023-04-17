import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import ArtCard from "./components/ArtCard";

function App() {
  const [favorites, setFavorites] = useState([]);

  //login dialog
  const [openLogin, setOpenLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  //favorites local storage
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
          element={
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
              openLogin={openLogin}
              setOpenLogin={setOpenLogin}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              openLogin={openLogin}
              setOpenLogin={setOpenLogin}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/art/:id"
          element={
            <ArtCard
              favorites={favorites}
              setFavorites={setFavorites}
              openLogin={openLogin}
              setOpenLogin={setOpenLogin}
              loggedIn={loggedIn}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
