import { useEffect, useState } from "react";
import Artwork from './Artwork'
import { Box, CircularProgress, Pagination, Stack } from '@mui/material/'
import LoadingMask from "./LoadingMask";


const apiKey = "9fcbde6d-b1de-4546-8974-eef81e8f90f4";
let apiAddress = `https://api.harvardartmuseums.org/object?size=100&page=1?&apikey=${apiKey}`;

function Artworks() {
  const [arts, setArts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const fetchArts = () => {
    setIsLoading(true)
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => {

        setTimeout(() => {
          setIsLoading(false)
          setArts(data)
        }, 3000)
      });
  };
  useEffect(() => fetchArts(), []);
  useEffect(() => console.log(arts), [arts])



  return (
    <div className="artworks">
      {isLoading ? <LoadingMask /> : arts != 0 ? (
        <Box>
          {arts.records
            .map((art, index) => (
              <Artwork key={index} artData={art} />
            ))}
          <Stack sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
            <Pagination count={arts.info.pages} shape="rounded" />
          </Stack>
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