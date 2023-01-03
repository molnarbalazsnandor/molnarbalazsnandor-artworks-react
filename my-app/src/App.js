import "./App.css";
import { useEffect, useState } from "react";
import Artworks from "./components/Artworks";

const apiAddress = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;

function App() {
  const [art, setArt] = useState([]);
  const fetchArts = () => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => setArt(data));
  };
  useEffect(() => fetchArts(), []);
  console.log(art);

  return (
    <div className="App">
      <Artworks />
    </div>
  );
}

export default App;
