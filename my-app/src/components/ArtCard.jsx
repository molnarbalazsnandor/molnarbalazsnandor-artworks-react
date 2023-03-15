import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, Button,CardActions, Typography, CardMedia, Box, CircularProgress, IconButton } from '@mui/material/'
import { Favorite, FavoriteBorder } from '@mui/icons-material/'
import './DetailsCard.css';


function ArtCard({favorites, setFavorites}) {
  let { id } = useParams();
  const navigate = useNavigate();

  const [artwork, setArtwork] = useState([]);
  const apiAddress = `https://api.harvardartmuseums.org/OBJECT/${id}?apikey=73553f4b-8036-4627-98e1-b61ab27263f0`;


  const fetchArt = () => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => {
          setArtwork(data)
      });
  };
  useEffect(() => fetchArt(), []);
  useEffect(() => console.log(artwork), [artwork]);

  const handleFavButton = () => {
    if(favorites.includes(Number(id))){
      let deleteId = favorites.filter(mod => mod !==Number(id));
      setFavorites([...deleteId]) 
    }else {
      setFavorites([...favorites, Number(id)])
    }
  }

  return ( artwork != 0 ? (
    <div className='detailsCard'>
    <Card sx={{ 
      width:600
      

      
     }}>
      <CardMedia
        sx={{ height: 250 }}
        image={artwork.images[0].baseimageurl}
        
        
      />


      <CardContent>
        <Typography sx={{ fontSize:20, fontWeight: 700 }} >
        {artwork.title}
        </Typography>

        <Typography sx={{ fontSize:16}}>
        Creditline: {artwork.creditline}
        </Typography>

        <Typography sx={{ fontSize:16/* , color:purple */ }}>
        Accessionyear: {artwork.accessionyear}
        </Typography>
        
        <Typography sx={{ fontSize:16/* , color:red  */}}>
        Commentary: {artwork.commentary}
        </Typography>

        <Typography sx={{ fontSize:16/* , color:orange  */}}>
        Classification: {artwork.classification}
        </Typography>

        <Typography sx={{ fontSize:16/* , color:orange  */}}>
        Period: {artwork.period}
        </Typography>


      </CardContent>
      <CardActions>
      <Button size="medium" sx={{backgroundColor: "gray"}}variant="contained" /* backgroundColor="blue" color="white" */ onClick= {() =>{navigate("/")}}>Return</Button>
      <IconButton aria-label="add to favorites" onClick={() => {handleFavButton()}
      }>
        {favorites.includes(Number(id)) ? <Favorite/>: <FavoriteBorder/>}
          
        </IconButton>
      </CardActions>
    </Card>
    </div>
  ):(
    <Box sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress />
  </Box>
  )

  )
}

export default ArtCard