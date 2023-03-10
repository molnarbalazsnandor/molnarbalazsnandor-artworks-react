import React from 'react'
import Artworks from './Artworks'
import Layout from './Layout'
import { useState } from "react";
import { Box, Pagination, Stack } from '@mui/material/'

function Home({favorites, setFavorites}) {
  const [page, setPage] = useState(1);
  return (
    <Layout>
      <Box>
      <Artworks page={page}               favorites={favorites}
              setFavorites={setFavorites}/>
      <Stack sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
            <Pagination count={4860} shape="rounded" onChange={(e,p)=>setPage(p)}/>
          </Stack>

      </Box>

    </Layout>
    
  )
}

export default Home