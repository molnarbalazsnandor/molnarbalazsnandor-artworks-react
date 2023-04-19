import React, { useEffect, useState } from 'react'
import { Box, ImageList, ImageListItem, Button, ImageListItemBar, IconButton } from '@mui/material/'
import { Favorite, FavoriteBorder } from '@mui/icons-material/'
import { useNavigate } from "react-router-dom"
import { UserAuth } from '../context/AuthContext'


function Artwork({ artData, favorites, setFavorites, openLogin, setOpenLogin,}) {

  const navigate = useNavigate();
  const {user, logOut} = UserAuth();

/*   const [isFavorite, setIsFavorite] = useState(false)
  useEffect(function () {
  }, [isFavorite]) */

  const handleFavButton = () => {
    if(favorites.includes(artData.id)){
      let deleteId = favorites.filter(mod => mod !==artData.id);
      setFavorites([...deleteId]) 
    }else {
      setFavorites([...favorites, artData.id])
    };
  }

  return (
    <>
      <ImageListItem key={artData.primaryimageurl} onClick={() => navigate(`/art/${artData.id}`)}>
        <img
          src={`${artData.primaryimageurl}?w=164&h=164&fit=crop&auto=format&dpr=2 `}
          srcSet={`${artData.primaryimageurl}`}
          alt={artData.title}
          loading="lazy"
        />
        <ImageListItemBar 
        sx={{ fontSize:18, color:'gray' }}
        position="below" title={artData.objectnumber} />
        <ImageListItemBar sx={{ fontSize:20, color:'gray' }}
        position="below" title={artData.department} />
        <ImageListItemBar position="below" title={artData.title} />
        <ImageListItemBar sx={{ fontSize:20, color:'gray' }}
        position="below" title={artData.classification} />
      </ImageListItem>
      <IconButton aria-label="add to favorites" onClick={() => {user?.displayName ? handleFavButton(): setOpenLogin(true)}
          }>
          {favorites.includes(artData.id) ? <Favorite/>: <FavoriteBorder/>}
      </IconButton>
    </>
  )
}

export default Artwork
