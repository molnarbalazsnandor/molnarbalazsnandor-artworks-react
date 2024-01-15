import React from "react";
import Layout from "./Layout";
import "./account.css";
import {
  Box,
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material/";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Account() {
  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();

  const buttonStyle = {
    background: "none",
    textTransform: "none",
    color: "black",
    fontSize: "16px",
    fontFamily: "Oxygen, sans-serif",
    border: "2px solid black",
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {user ? (
          <Card
            sx={{
              width: "50vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                width: "50vw",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                src={user.photoURL}
                alt="Profile Picture"
                sx={{ width: 200, height: 200, marginBottom: 2 }}
              />
              <Typography variant="h5" sx={{ mb: 1 }}>
                Welcome, {user.displayName}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Email: {user.email}
              </Typography>
              <CardContent
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  style={buttonStyle}
                  className="user-button"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
                <Button
                  style={buttonStyle}
                  className="user-button"
                  onClick={() => navigate("/favorites")}
                >
                  Favorites
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        ) : (
          <GoogleButton onClick={handleGoogleSignIn}>
            Sign in with Google
          </GoogleButton>
        )}
      </Box>
    </Layout>
  );
}

export default Account;
