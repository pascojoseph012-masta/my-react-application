import React from 'react'
import { Link } from 'react-router-dom'
import  './links.css'
import close from '../assets/close.svg'
import close2 from '../assets/close2.svg'
import logo from '../assets/10012.png'
import face from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import logos from '../assets/10002.svg'






const Links = ({closePopup}) => {
  return (
    <div>

        <div className="link-container">
            <div className="left-side">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div className="linkies">
                    <Link to='#'>Home</Link>
                    <Link to='#'>About</Link>
                    <Link to='#'>Destination</Link>
                    <Link to='#'>Tour</Link>
                    <Link to='#'>Blogs</Link>
                    <Link to='#'>Contact Us</Link>
                </div>
            </div>
            <div className="right-side">
                <div className="close-btn"><button onClick={()=>closePopup()}  type="button"><img src={close2} alt="close2"/></button></div>
                <div className="platform">
                    <Link to='#'><img src={face} alt="face" /></Link>
                    <Link to='#'><img src={instagram} alt="instagram" /></Link>
                    <Link to='#'><img src={twitter} alt="twitter" /></Link>
                </div>
                <div className="back-logo">
                    <img src={logos} alt="logos" />
                </div>
            </div>
        </div>


    </div>
  )
}

export default Links