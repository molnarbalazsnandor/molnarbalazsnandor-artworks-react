import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, Button,CardActions, Typography, CardMedia, Box, CircularProgress } from '@mui/material/'
import { blue, green, orange, purple, red } from '@mui/material/colors';
import './DetailsCard.css';


function ArtCard() {
  let { id } = useParams();
  const navigate = useNavigate();

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
      <Button size="medium" variant="outlined" /* backgroundColor="blue" color="white" */ onClick= {() =>{navigate("/")}}>Return</Button>
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