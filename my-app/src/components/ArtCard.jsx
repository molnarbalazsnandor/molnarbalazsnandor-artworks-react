import React from 'react'
import { useNavigate } from "react-router-dom";
import {Button, CardMedia} from '@mui/material;

function ArtCard(artData) {

    const navigate = useNavigate();

  return (
    <div>
    <h2>{artData.title}</h2>
    <h4>{artData.displayname}</h4>
    <h4>{artData.worktype}</h4>
    <h4>{artData.yearmade}</h4>
    <h4>{artData.commentary}</h4>
    <h4>{artData.rank}</h4>
    <p><button onClick={() => navigate("/Artwork")}>Return</button>
    </p>
    </div>
    

  )
}

export default ArtCard