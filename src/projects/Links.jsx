import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  './links.css'
import './LinksResponsive.css'
import close from '../assets/close.svg'
import close2 from '../assets/close2.svg'
import logo from '../assets/10012.png'
import face from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import logos from '../assets/10002.svg'
import { motion, AnimatePresence } from 'framer-motion';
import Tours from '../projects/Tours'
import MainContent from '../projects/MainContent'





const Links = ({closePopup, showTour}) => {

   
    
  return (
    <div>

        <motion.div 
        
        initial={{ x: '100%' }} // Start off-screen to the left
          animate={{ x: 0 }}       // Slide into view
          exit={{ x: '-100%' }}    // Slide back out
          transition={{ 
            type: 'tween',         // Disables physics, enables CSS timeline
            duration: 0.4,         // Animation duration in seconds
            ease: 'easeInOut'      // Standard CSS easing curve
          }}
        
        
        className="link-container">
            <div className="left-side">
                <div className="logo"> <Link to="/"> <img src={logo} alt="logo" /></Link></div>
                <div className="linkies">
                    <Link to='#'>Home</Link>
                    <Link to='#'>About</Link>
                    <Link to='#'>Destination</Link>
                     <Link onClick={() => handleTourClick(false)} to="/Tours">Tour</Link> 
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
        </motion.div>


    </div>
  )
}

export default Links