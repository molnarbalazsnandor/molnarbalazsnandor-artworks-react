import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import {Button, CardMedia} from '@mui/material'

function ArtCard() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [artwork, setArtwork] = useState([]);
  const apiAddress = `https://iiif.harvardartmuseums.org/manifests/object/${id}`;

  const fetchArt = () => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => {
          setArtwork(data)
      });
  };
  useEffect(() => fetchArt(), []);
  useEffect(() => console.log(artwork), [artwork]);


  return (
    <div>
    <h2>{artwork.label}</h2>
    <h4>{artwork.displayname}</h4>
    <h4>{artwork.metadata[5].value}</h4>
    <h4>{artwork.metadata[0].value}</h4>
    <h4>{artwork.commentary}</h4>
    <h4>{artwork.rank}</h4>
    <p><button onClick={() => navigate("/")}>Return</button>
    </p>
    </div>
    

  )
}

export default ArtCard