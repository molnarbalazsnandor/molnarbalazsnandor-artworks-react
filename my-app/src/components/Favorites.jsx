import React from 'react'
import { Box, CircularProgress, Button } from '@mui/material/'
import Layout from './Layout'
import Favorite from './Favorite'


function Favorites({favorites, setFavorites}) {

  return (
    <Layout>
        <Box>
          {favorites.length != 0 ?(
            favorites
            .map((favorite, index) => (
              <Favorite key={index} favoriteID={favorite} />
            ))):(
              <Box sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }}>
              No favorites selected!
            </Box>
            )}
            <Button sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }} size="large" variant="contained" onClick={() => {localStorage.clear(); window.location.reload(); }
          }>Delete favorites</Button>
        </Box>
         </Layout>
  )
}

export default Favorites