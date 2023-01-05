import React from 'react'
import {Link} from "react-router-dom"
import './header.css'

function Header() {
  return (
    <div className="header">
      <h1>Harvard <br></br> Art Museums</h1>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Header