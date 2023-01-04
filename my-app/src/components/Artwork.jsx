import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography, CardMedia } from '@mui/material/'
import { useNavigate } from "react-router-dom"

function Artwork({ artData }) {

  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(function () {
  }, [isFavorite])


  return (
    <>
      <img onClick={() => {
        setIsFavorite((oldValue) => !oldValue)
      }
      } src={isFavorite ? "https://www.psdgraphics.com/wp-content/uploads/2022/01/heart-png-768x589.png" : "https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"} alt="star" className="favorite" width="50px" />
      <Card variant="outlined" sx={{ minWidth: 275 }}>
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
          sx={{ height: 480 }}
          image={artData.primaryimageurl}
          title={artData.title}
        />
        <CardActions>
          <Button size="medium" onClick={() => navigate(`/art/${artData.id}`)}>See more details</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Artwork