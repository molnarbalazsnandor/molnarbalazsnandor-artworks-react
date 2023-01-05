import React from 'react'
import { Card, CardActions, CardContent, Box, Typography, CardMedia, CircularProgress } from '@mui/material/'

function Favorite({artwork}) {
  return ( artwork != 0 ? (
    <Card sx={{ width: 1000 }}>
      <CardMedia
        sx={{ height: 700 }}
        image={artwork.images[0].baseimageurl}
        title={artwork.title}
      />
      <CardContent>
        <Typography sx={{ fontSize:16/* , color:blue  */}} >
        {artwork.title}
        </Typography>
        <Typography sx={{ fontSize:14/* , color:green  */}}>
        {artwork.creditline}
        </Typography>
        <Typography sx={{ fontSize:14/* , color:purple */ }}>
        {artwork.displayname}
        </Typography>
        <Typography sx={{ fontSize:14/* , color:red  */}}>
        {artwork.commentary}
        </Typography>
        <Typography sx={{ fontSize:16/* , color:orange  */}}>
          {artwork.rank}
        </Typography>
      </CardContent>
    </Card>
  ):(
    <Box sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress />
  </Box>
  )

  )
}

export default Favorite