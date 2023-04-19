import React from 'react'
import Layout from './Layout'
import app from "./../firebase"
import { Button } from '@mui/material/'
import {signInWithGoogle, handleSignOutButton} from "./../firebase"
import {GoogleButton} from "react-google-button"


function Login() {
  return (
    <Layout>
    <GoogleButton onClick={() => signInWithGoogle()}>Sign in with Google</GoogleButton> 
    <Button onClick={() => handleSignOutButton()}>Sign out</Button> 
  </Layout>
  )
}

export default Login