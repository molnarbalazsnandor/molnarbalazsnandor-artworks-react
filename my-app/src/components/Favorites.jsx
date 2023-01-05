import React from 'react'
import { Box, CircularProgress } from '@mui/material/'
import Layout from './Layout'
import Favorite from './Favorite'


function Favorites({favorites, setFavorites}) {

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