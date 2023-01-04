import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, Button,CardActions, Typography, CardMedia } from '@mui/material/'
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


  return (
    <>
         <Card sx={{ maxWidth: 400 }}>
           <CardMedia
             sx={{ height: 250 }}
             image={artwork.primaryimageurl}
             title={artwork.title}
           />
           <CardContent>
             <Typography sx={{ fontSize:16, color:blue }} >
             {artwork.displayname}
             </Typography>
             <Typography sx={{ fontSize:14, color:green }}>
               {artwork.worktype}
             </Typography>
             <Typography sx={{ fontSize:14, color:purple }}>
               {artwork.commentary}
             </Typography>
             <Typography sx={{ fontSize:14, color:red }}>
               {artwork.yearmade}
             </Typography>
             <Typography sx={{ fontSize:16, color:orange }}>
               {artwork.rank}
             </Typography>
           </CardContent>
           <CardActions>
           <Button size="medium" variant="outlined" backgroundColor="blue" color="white" onClick= {() =>{navigate("/")}}>Return</Button>
           </CardActions>
         </Card>
     </>
  )
}

export default ArtCard