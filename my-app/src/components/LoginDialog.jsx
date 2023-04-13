import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions,CircularProgress } from '@mui/material/'
import { useEffect } from 'react';

function LoginDialog(openLogin,setOpenLogin) {
  return (
    <div>
      <Dialog open={openLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <DialogContentText>
              You need to log in in order to mark artworks as favorites!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button /* onClick={handleSubButton} variant={subscriptionButton} */>Log in</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginDialog