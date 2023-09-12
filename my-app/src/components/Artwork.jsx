import React, { useEffect, useState } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Button,
  ImageListItemBar,
  IconButton,
} from "@mui/material/";
import { Favorite, FavoriteBorder } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Artwork({
  artData,
  favorites,
  setFavorites,
  openLogin,
  setOpenLogin,
}) {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  /*   const [isFavorite, setIsFavorite] = useState(false)
  useEffect(function () {
  }, [isFavorite]) */

  const handleFavButton = () => {
    if (favorites.includes(artData.id)) {
      let deleteId = favorites.filter((mod) => mod !== artData.id);
      setFavorites([...deleteId]);
    } else {
      setFavorites([...favorites, artData.id]);
    }
  };

  return (
    <>
      <ImageListItem
        key={artData.primaryimageurl}
        sx={{ position: "relative", margin: "8px" }}
        onClick={() => navigate(`/art/${artData.id}`)}
      >
        <img
          src={`${artData.primaryimageurl}?w=164&h=164&fit=crop&auto=format&dpr=2 `}
          srcSet={`${artData.primaryimageurl}`}
          alt={artData.title}
          loading="lazy"
        />
        <ImageListItemBar
          sx={{ fontSize: 18, color: "gray", marginLeft: "8px" }}
          position="below"
          title={artData.objectnumber}
        />
        <ImageListItemBar
          sx={{ fontSize: 20, color: "gray", marginLeft: "8px" }}
          position="below"
          title={artData.department}
        />
        <ImageListItemBar
          sx={{ fontSize: 20, color: "black", marginLeft: "8px" }}
          position="below"
          title={artData.title}
        />
        <ImageListItemBar
          sx={{ fontSize: 20, color: "gray", marginLeft: "8px" }}
          position="below"
          title={artData.classification}
        />
        <IconButton
          aria-label="add to favorites"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            marginRight: "8px", // Add margin for spacing
            marginBottom: "8px", // Add margin for spacing
          }}
          onClick={() => {
            user?.displayName ? handleFavButton() : setOpenLogin(true);
          }}
        >
          {favorites.includes(artData.id) ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </ImageListItem>
    </>
  );
}

export default Artwork;
