import React from 'react'
import {Card,CardActions,CardContent,Button,Typography,CardMedia } from '@mui/material/'

function Artwork({artData}) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {artData.title}
      </Typography>
      <Typography variant="h5" component="div">
      {artData.creditline}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {artData.dated}
      </Typography>
    </CardContent>
    <CardMedia
        sx={{ height: 480}}
        image={artData.primaryimageurl}
        title={artData.title}
      />
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Artwork