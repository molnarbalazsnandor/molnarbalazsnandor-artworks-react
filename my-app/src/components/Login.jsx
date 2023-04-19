import React from 'react'
import Layout from './Layout'
import app from "./../firebase"
import { Button, Typography } from '@mui/material/'
/* import {signInWithGoogle, handleSignOutButton} from "./../firebase" */
import {GoogleButton} from "react-google-button"
import {UserAuth} from "../context/AuthContext"


function Login() {

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
    <Layout>
    <GoogleButton onClick={handleGoogleSignIn}>Sign in with Google</GoogleButton> 
    {user?.displayName? 
        <Typography sx={{ fontSize:20, fontWeight: 700 }} >
          Welcome, {user?.displayName}
        </Typography> : "sign in"
    }
    <Button onClick={handleSignOut}>Sign out</Button> 
  </Layout>
  )
}

export default Login