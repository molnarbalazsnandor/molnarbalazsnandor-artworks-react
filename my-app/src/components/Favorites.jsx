import React from 'react'
import { Box, CircularProgress } from '@mui/material/'
import Layout from './Layout'
import Favorite from './Favorite'


function Favorites({favorites, setFavorites}) {
/*   const [favoriteArts, setFavoriteArts] = useState([]);
  const [favoritesCounter, setFavoritesCounter] = useState(0)
  const apiAddress = `https://api.harvardartmuseums.org/OBJECT/${favorites[favoritesCounter]}?apikey=9fcbde6d-b1de-4546-8974-eef81e8f90f4`


  const fetchFavoriteArts = () => {
      fetch(apiAddress)
        .then((res) => res.json())
        .then((data) => {
            setFavoriteArts([...favoriteArts,data]);
          });
          if(favoritesCounter<favorites.length){setFavoritesCounter(favoritesCounter+1)}
          console.log(favorites.length, favoritesCounter)
  };
  useEffect(() => fetchFavoriteArts(), [favoritesCounter]);
  useEffect(() => console.log(favoriteArts), [favoriteArts]); */


  return (
    <Layout>
              <Box>
          {favorites.length != 0 ?(favorites
            .map((favorite, index) => (
              <Favorite key={index} favoriteID={favorite} />
            ))):(
              <Box sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress />
            </Box>
            )}
        </Box>
         </Layout>
  )
}

export default Favorites