import React from 'react'
import { Card, CardContent, Button,CardActions, Typography, CardMedia } from '@mui/material/'
import { blue, green, orange, purple, red } from '@mui/material/colors';

function ArtCard({ artData }) 
 {
    return (
 <>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={artData.primaryimageurl}
          title={artData.title}
        />
        <CardContent>
          <Typography sx={{ fontSize:16, color:blue }} >
          {artData.displayname}
          </Typography>
          <Typography sx={{ fontSize:14, color:green }}>
            {artData.worktype}
          </Typography>
          <Typography sx={{ fontSize:14, color:purple }}>
            {artData.commentary}
          </Typography>
          <Typography sx={{ fontSize:14, color:red }}>
            {artData.yearmade}
          </Typography>
          <Typography sx={{ fontSize:16, color:orange }}>
            {artData.rank}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" variant="outlined" backgroundColor="blue" color="white" onClick= {() =>{}}>Return</Button>
        </CardActions>
      </Card>
  </>
/*function ArtCard(artData) {

    const navigate = useNavigate();

  return (
    <div>
    <h2>{artData.title}</h2>
    <h4>{artData.displayname}</h4>
    <h4>{artData.worktype}</h4>
    <h4>{artData.yearmade}</h4>
    <h4>{artData.commentary}</h4>
    <h4>{artData.rank}</h4>
    <p>
    <Button variant="outlined"onClick={() => navigate("/Artwork")}>Return</Button>
    </p>
    </div>*/
    

  )
}

export default ArtCard