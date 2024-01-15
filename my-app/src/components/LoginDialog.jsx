import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material/";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";

function LoginDialog({ openLogin, setOpenLogin }) {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  /* 
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }; */
  return (
    <div>
      <Dialog open={openLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You need to log in to mark artworks as favorites!
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <GoogleButton
            onClick={() => {
              handleGoogleSignIn();
              setOpenLogin(false);
            }}
          >
            Sign in with Google
          </GoogleButton>
          <Button
            sx={{
              background: "none",
              textTransform: "none",
              color: "black",
              fontSize: "16px",
              height: "5vh",
              fontFamily: "Oxygen, sans-serif",
            }}
            className="user-button"
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
