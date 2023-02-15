import { useEffect, useState } from "react";
import Artwork from './Artwork'
import { Box, CircularProgress} from '@mui/material/'
import './DetailsCard.css'


function Artworks({page, pageCount, setPageCount, favorites, setFavorites}) {
  const [arts, setArts] = useState([]);
  const [filter, setFilter]= useState("");
  const apiAddress = `https://api.harvardartmuseums.org/object?size=50&page=${page}&apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`;

  const apiSearch = `https://api.harvardartmuseums.org/object?title=${filter}&size=50&apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`
  

  useEffect(() => {
    const fetchArts = async () => {
      const data = await fetch(apiAddress);
      const json = await data.json();
      setArts(json);
      setPageCount(json.info.pages)
    };
    fetchArts().catch(console.error)
  }, [page]);

  useEffect(() => console.log(arts, pageCount), [arts]);



  useEffect(() => {
    const fetchFilteredArts = async () => {
      setTimeout(async ()=>{
        const data = await fetch(apiSearch);
        const json = await data.json();
        setArts(json);
        setPageCount(json.info.pages)
      },2000)
    };
    fetchFilteredArts()
  }, [filter]);
  useEffect(() => console.log(arts, pageCount), [filter]);


  return (
    <div className="artworks">
      <input type="text" placeholder="search" value={filter} onChange={event => {setFilter(event.target.value)}}/>
      {arts != 0 ? (
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