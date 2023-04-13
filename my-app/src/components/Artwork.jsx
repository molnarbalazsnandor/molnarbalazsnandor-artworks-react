import React, { useEffect, useState } from 'react'
import { Box, ImageList, ImageListItem, Button, ImageListItemBar, IconButton } from '@mui/material/'
import { Favorite, FavoriteBorder } from '@mui/icons-material/'
import { useNavigate } from "react-router-dom"


function Artwork({ artData, favorites, setFavorites }) {

  const navigate = useNavigate();

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

          {/* tipp:itt kéne map-elni!  https://www.youtube.com/watch?v=D25bffKDNkw*/}
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
{/*              <Button sx={{backgroundColor: "gray"}}size="medium" variant="contained" onClick={() => navigate(`/art/${artData.id}`)}>See more details</Button> */}
          <IconButton aria-label="add to favorites" onClick={() => {handleFavButton()}
      }>
        {favorites.includes(artData.id) ? <Favorite/>: <FavoriteBorder/>}
          
        </IconButton>

    </>
  )
}

export default Artwork

/* 
      <img onClick={() => {
        setIsFavorite((oldValue) => !oldValue)
      }
      } src={isFavorite ? "https://www.psdgraphics.com/wp-content/uploads/2022/01/heart-png-768x589.png" : "https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"} alt="star" className="favorite" width="50px" /> 
      <Card class="Tibi" variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {artData.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {artData.creditline}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {artData.dated}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 480, maxWidth: 1028 }}
          image={artData.primaryimageurl}
          title={artData.title}
        />
        <CardActions>
          <Button sx={{backgroundColor: "gray"}}size="medium" variant="contained" onClick={() => navigate(`/art/${artData.id}`)}>See more details</Button>
          <IconButton aria-label="add to favorites" onClick={() => {handleFavButton()}
      }>
        {favorites.includes(artData.id) ? <Favorite/>: <FavoriteBorder/>}
          
        </IconButton>
        </CardActions>
      </Card>
*/