import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, Button,CardActions, Typography, CardMedia, Box, CircularProgress, IconButton } from '@mui/material/'
import { Favorite, FavoriteBorder } from '@mui/icons-material/'
import { blue, green, orange, purple, red } from '@mui/material/colors';

function ArtCard({favorites, setFavorites}) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false)

  const [artwork, setArtwork] = useState([]);
  const apiAddress = `https://api.harvardartmuseums.org/OBJECT/${id}?apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`;


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
      <CardActions>
      <Button size="medium" variant="outlined" /* backgroundColor="blue" color="white" */ onClick= {() =>{navigate("/")}}>Return</Button>
      <IconButton aria-label="add to favorites" onClick={() => {
        setIsFavorite((oldValue) => !oldValue);
        setFavorites([...favorites, Number(id)])
      }
      }>
        {isFavorite ? <Favorite/>: <FavoriteBorder/>}
          
        </IconButton>
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