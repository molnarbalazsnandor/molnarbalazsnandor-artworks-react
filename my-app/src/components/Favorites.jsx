import React from "react";
import { Box, Button } from "@mui/material/";
import Layout from "./Layout";
import Favorite from "./Favorite";

function Favorites({ favorites, setFavorites }) {
  return (
    <Layout>
      {favorites.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {favorites.map((favorite, index) => (
            <Favorite key={index} favoriteID={favorite} />
          ))}
          <Button
            sx={{
              backgroundColor: "gray",
            }}
            size="large"
            variant="contained"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Delete favorites
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No favorites selected!
        </Box>
      )}
    </Layout>
  );
}

export default Favorites;
