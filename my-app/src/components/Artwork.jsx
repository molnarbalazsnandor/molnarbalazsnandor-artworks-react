import React, { useState } from "react";
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material/";
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
  const { user } = UserAuth();
  const [isSelected, setIsSelected] = useState(false);

  const handleItemClick = () => {
    setIsSelected(!isSelected);
    setTimeout(() => {
      navigate(`/art/${artData.id}`);
    }, 700);
  };

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
        sx={{
          position: "relative",
          margin: "8px",
          border: isSelected ? "2px dashed black" : "none",
        }}
        onClick={handleItemClick}
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
            marginRight: "8px",
            marginBottom: "8px",
          }}
          onClick={(e) => {
            e.stopPropagation();
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
