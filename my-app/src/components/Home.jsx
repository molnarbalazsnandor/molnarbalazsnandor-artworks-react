import React from 'react'
import Artworks from './Artworks'
import Layout from './Layout'
import { useState } from "react";
import { Box, Pagination, Stack } from '@mui/material/'

function Home({favorites, setFavorites,openLogin,setOpenLogin,loggedIn}) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(4860);
  return (
    <>
      <Layout>
        <Box>
        <Artworks page={page}   
                setPage={setPage}
                pageCount={pageCount} 
                setPageCount={setPageCount}
                favorites={favorites}
                setFavorites={setFavorites}
                openLogin={openLogin}
                setOpenLogin={setOpenLogin}
                />
        <Stack sx={{ display: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
              <Pagination count={pageCount} shape="rounded" onChange={(e,p)=>setPage(p)}/>
            </Stack>
        </Box>
      </Layout>
    </>
    
  )
}

export default Home