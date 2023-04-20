import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions,CircularProgress } from '@mui/material/'
import {Link} from "react-router-dom"
import {GoogleButton} from "react-google-button"
import {UserAuth} from "../context/AuthContext"

function LoginDialog({openLogin,setOpenLogin}) {
  
  const {googleSignIn, logOut, user} = UserAuth();
  

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn()
    } catch (error){
      console.log(error)
    }
  }

  const handleSignOut = async () => {
    try{
      await logOut()
    } catch (error){
      console.log(error)
    }
  }
  return (
    <div>
      <Dialog open={openLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <DialogContentText>
              You need to log in to mark artworks as favorites!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <GoogleButton onClick={()=> {handleGoogleSignIn(); setOpenLogin(false)}}>Sign in with Google</GoogleButton> 
          <Button onClick={() => {setOpenLogin(false)}}>OK</Button> 
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginDialog