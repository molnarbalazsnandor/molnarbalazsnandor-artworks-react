import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import ArtCard from "./components/ArtCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/art/:id" element={<ArtCard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
