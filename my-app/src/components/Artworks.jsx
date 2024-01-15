import { useEffect, useState } from "react";
import Artwork from "./Artwork";
import {
  Box,
  CircularProgress,
  ImageList,
  TextField,
  InputAdornment,
} from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import "./DetailsCard.css";

function Artworks({
  page,
  pageCount,
  setPageCount,
  favorites,
  setFavorites,
  openLogin,
  setOpenLogin,
}) {
  const [arts, setArts] = useState([]);
  const [filter, setFilter] = useState("");

  const apiSearch = `https://api.harvardartmuseums.org/object?title=${filter}&size=50&page=${page}&apikey=73553f4b-8036-4627-98e1-b61ab27263f0`;

  useEffect(() => {
    const fetchArts = async () => {
      const data = await fetch(apiSearch);
      const json = await data.json();
      setArts(json);
      setPageCount(json.info.pages);
    };
    fetchArts().catch(console.error);
  }, [page, filter, apiSearch, setPageCount]);

  return (
    <div
      className="artworks"
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "80vw",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <div style={{}}>
        <TextField
          variant="outlined"
          placeholder="Search"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        />
      </div>
      {arts.records && arts.records.length > 0 ? (
        <Box className="image-list-box" sx={{ flexDirection: "column" }}>
          <ImageList variant="masonry" cols={4} gap={50}>
            {arts.records.map((art, index) => (
              <Artwork
                key={index}
                artData={art}
                favorites={favorites}
                setFavorites={setFavorites}
                openLogin={openLogin}
                setOpenLogin={setOpenLogin}
              />
            ))}
          </ImageList>
        </Box>
      ) : (
        <Box
          sx={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default Artworks;
