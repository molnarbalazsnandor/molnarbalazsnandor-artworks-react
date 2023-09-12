import React from 'react';
import Layout from './Layout';
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material/';
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom"

function Account() {
  const { googleSignIn, logOut, user } = UserAuth();

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
      {user ?
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Avatar src={user.photoURL} alt="Profile Picture" sx={{ width: 200, height: 200, marginBottom: 2 }} />
            <Typography variant="h4" sx={{ mb: 1 }}>
              Welcome, {user.displayName}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Email: {user.email}
            </Typography>
            <Button onClick={handleSignOut} variant="contained" >
              Sign Out
            </Button>
            <Link to="/favorites">
              <Button variant="outlined">
                See your favorites
              </Button>
            </Link>
          </CardContent>
        </Card>
        :
        <GoogleButton onClick={handleGoogleSignIn}>Sign in with Google</GoogleButton>
      }
    </Layout>
  );
}

export default Account;