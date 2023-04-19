import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions,CircularProgress } from '@mui/material/'

import {Link} from "react-router-dom"

function LoginDialog({openLogin,setOpenLogin}) {
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
          <Link to="/login"><Button onClick={() => {setOpenLogin(false)}}>Login</Button></Link> 
          <Button onClick={() => {setOpenLogin(false)}}>OK</Button> 
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginDialog