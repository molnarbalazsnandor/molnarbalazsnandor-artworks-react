import { useEffect, useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"
import {Button, CardMedia} from '@mui/material'

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
  )
}

export default ArtCard