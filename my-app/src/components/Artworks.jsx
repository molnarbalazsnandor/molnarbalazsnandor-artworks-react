import { useEffect, useState } from "react";
import Artwork from './Artwork'
import { Box, CircularProgress} from '@mui/material/'
import LoadingMask from "./LoadingMask";



function Artworks({page, favorites, setFavorites}) {
  const [arts, setArts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter]= useState("")
  const apiAddress = `https://api.harvardartmuseums.org/object?size=50&page=${page}&apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`;

  const apiSearch = `https://api.harvardartmuseums.org/object?title=${filter}&size=50&apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`
  
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

  const fetchFilteredArts = () => {
    setTimeout(()=>{
      fetch(apiSearch)
      .then((res) => res.json())
      .then((data) => {setArts(data)});
    },2000)
  };

  useEffect(() => fetchFilteredArts(), [filter]);
  useEffect(() => console.log(arts), [filter]);


  return (
    <div className="artworks">
      <input type="text" placeholder="search" value={filter} onChange={event => {setFilter(event.target.value)}}/>
      {isLoading ? <LoadingMask /> : arts != 0 ? (
        <Box>
          {arts.records
            .map((art, index) => (
              <Artwork key={index} artData={art} favorites={favorites}
              setFavorites={setFavorites}/>
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