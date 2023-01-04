import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, Button,CardActions, Typography, CardMedia, Box, CircularProgress } from '@mui/material/'
import { blue, green, orange, purple, red } from '@mui/material/colors';

function ArtCard() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [artwork, setArtwork] = useState([]);
  const apiAddress = `https://iiif.harvardartmuseums.org/manifests/object/${id}`;

  const fetchArt = () => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => {
          setArtwork(data)
      });
  };
  useEffect(() => fetchArt(), []);
  useEffect(() => console.log(artwork), [artwork]);


  return ( artwork != 0 ? (
    <Card sx={{ width: 1000 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={artwork.sequences[0].canvases[0].images[0].resource["@id"]}
        title={artwork.title}
      />
      <CardContent>
        <Typography sx={{ fontSize:16/* , color:blue  */}} >
        {artwork.label}
        </Typography>
        <Typography sx={{ fontSize:14/* , color:green  */}}>
        {artwork.metadata[5].label}: {artwork.metadata[5].value}
        </Typography>
        <Typography sx={{ fontSize:14/* , color:purple */ }}>
        {artwork.metadata[4].label}: {artwork.metadata[4].value}
        </Typography>
        <Typography sx={{ fontSize:14/* , color:red  */}}>
          {artwork.metadata[0].label}: {artwork.metadata[0].value}
        </Typography>
        <Typography sx={{ fontSize:16/* , color:orange  */}}>
          {artwork.rank}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="medium" variant="outlined" /* backgroundColor="blue" color="white" */ onClick= {() =>{navigate("/")}}>Return</Button>
      </CardActions>
    </Card>
  ):(
    <Box sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress />
  </Box>
  )

  )
}

export default ArtCard