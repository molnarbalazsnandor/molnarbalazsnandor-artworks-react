import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  const buttonStyle = {
    background: "none",
    textTransform: "none",
    color: "black",
    fontSize: "16px",
    fontFamily: "Oxygen, sans-serif",
    "&:hover": {
      transform: "scale(1.1) !important",
    },
  };

  return (
    <div className="header">
      <img
        className="HarvardArtLogo"
        src="/../pic/HarvardArtLogo.png"
        alt="HarvardArtLogo"
        onClick={() => navigate("/")}
      />
      <Button
        style={buttonStyle}
        className="home-button button"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <Button
        style={buttonStyle}
        className="favorites-button button"
        onClick={() => navigate("/favorites")}
      >
        Favorites
      </Button>
      <Button
        style={buttonStyle}
        className="account-button button"
        onClick={() => navigate("/account")}
      >
        Account
      </Button>
    </div>
  );
}

export default Header;
