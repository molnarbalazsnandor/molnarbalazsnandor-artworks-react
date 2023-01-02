import "./App.css";
import { useEffect, useState } from "react";

const apiAdress = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;

function App() {
  const [art, setArt] = useState([]);
  const fetchArts = () => {
    fetch(apiAdress)
      .then((res) => res.json())
      .then((data) => setArt(data));
  };
  useEffect(() => fetchArts(), []);
  console.log(art);

  return <div className="App"></div>;
}

export default App;
