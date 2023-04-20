import React from 'react'
import {Link} from "react-router-dom"
import './header.css'

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className= "HarvardArtLogo" src="/../pic/HarvardArtLogo.png" alt="HarvardArtLogo"/>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/account">Account</Link>
    </div>
  )
}

export default Header