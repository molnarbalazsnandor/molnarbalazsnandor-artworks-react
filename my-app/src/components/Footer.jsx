import React from 'react'
import { Link } from "react-router-dom"
import './footer.css'
import instagram from './icons/instagram.png'
import twitter from './icons/twitter.png'
import pinterest from './icons/pinterest.png'
import vimeo from './icons/vimeo.png'
import youtube from './icons/youtube.png'
import tripadvisor from './icons/tripadvisor.png'
import facebook from './icons/facebook.png'
import github from './icons/github.png'
import map from './icons/map.png'



function Footer() {
    return (
        <div className='footer'>
            <div className='upper'>
                <div className='main'>
                    <h2>Harvard <br></br> Art Museums</h2>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div className='middle'>
                    <div>
                        <h4 className="cursor2">Newsletter</h4>
                        <p className='sign'>Sign up to get the latest news</p>
                    </div>
                    <div>
                        <p className="cursor">Terms of use</p>
                        <p className="cursor">Privacy statement</p>
                        <p className="cursor">Digital Accessibility</p>
                        <p className="cursor">FAQs</p>
                    </div>
                </div>
                <div>
                    <div className='last'>
                        <div>
                            <img className="map" src={map} alt="" />
                        </div>
                        <div className='address'>
                            <p>Harvard Art Museums</p>
                            <p>32 Quincy Street</p>
                            <p>Cambridge, MA 02138</p>
                            <p>1 (617) 495-9400</p>
                        </div>
                    </div>
                    <div>
                        <p className="cursor">Special Event Rental</p>
                        <p className="cursor">Comment Card</p>
                        <p className="cursor">Image Licensing</p>
                        <p className="cursor">API</p>
                    </div>
                </div>
            </div>
            <div className='last-line'>
                <div className='tradeM'>© 2023 President and Fellows of Harvard College</div>
                <div>
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={vimeo} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={facebook} alt="" />
                    <img src={tripadvisor} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer