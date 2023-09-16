import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  CardMedia,
  CircularProgress,
} from "@mui/material/";

function Favorite({ favoriteID }) {
  const [artwork, setArtwork] = useState([]);
  const apiAddress = `https://api.harvardartmuseums.org/OBJECT/${favoriteID}?apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`;

  const fetchFavoriteArtwork = () => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => {
        setArtwork(data);
      });
  };

  useEffect(() => fetchFavoriteArtwork(), []);

  return artwork != 0 ? (
    <Card sx={{ width: "50vw", height: "auto", marginBottom: 8 }}>
      <CardMedia
        sx={{ height: 700 }}
        image={artwork.images[0].baseimageurl}
        title={artwork.title}
      />
      <CardContent>
        <Typography sx={{ fontSize: 16 /* , color:blue  */ }}>
          {artwork.title}
        </Typography>
        <Typography sx={{ fontSize: 14 /* , color:green  */ }}>
          {artwork.creditline}
        </Typography>
        <Typography sx={{ fontSize: 14 /* , color:purple */ }}>
          {artwork.displayname}
        </Typography>
        <Typography sx={{ fontSize: 14 /* , color:red  */ }}>
          {artwork.commentary}
        </Typography>
        <Typography sx={{ fontSize: 16 /* , color:orange  */ }}>
          {artwork.rank}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Box
      sx={{ display: "center", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Favorite;
