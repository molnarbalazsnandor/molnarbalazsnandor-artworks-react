import { useEffect, useState } from "react";
import Artwork from './Artwork'
import { Box, CircularProgress} from '@mui/material/'
import LoadingMask from "./LoadingMask";



function Artworks({page}) {
  const [arts, setArts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiAddress = `https://api.harvardartmuseums.org/object?size=50&page=${page}&apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`;
  
  const fetchArts = () => {
    setIsLoading(true)
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => {

        setTimeout(() => {
          setIsLoading(false)
          setArts(data)
        }, 1000)
      });
  };
  useEffect(() => fetchArts(), [page]);
  useEffect(() => console.log(arts), [arts]);




  return (
    <div className="artworks">
      {isLoading ? <LoadingMask /> : arts != 0 ? (
        <Box>
          {arts.records
            .map((art, index) => (
              <Artwork key={index} artData={art} />
            ))}
        </Box>
      ) : (
        <Box sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      )} 
    </div>
  )
}

export default Artworks