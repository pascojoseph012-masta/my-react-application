import React, { use, useState } from 'react'
import './Maintour.css'
import { TourContent } from '../assets/Tour'
import { Link} from 'react-router-dom'
import {motion, useAnimationControls, useInView} from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const MainTour = ({tours}) => {
  
  return (
    
   <div>
<motion.div 
initial={{scale: 0.7, opacity: 0}}
whileInView={{opacity: 1, scale: 1}}
transition={{ duration: 1.10, type: "spring" }}

className="main-tour">
  {TourContent.map((TourContent, index)=>{        
    return <div key={index}> 
            
    <img src={TourContent.image} alt="image" />
    <div className="downword">
      <h1>{TourContent.place}</h1>
      <h2>{TourContent.title}</h2>
      <h3>{TourContent.description}</h3>
      <div className="grid-sec"> <div className="duration_icon"> <img src={TourContent.duration_icon} alt="" /> <p>{TourContent.duration}</p></div> 
        <div className="group_icon"> <img src={TourContent.groupsize_icon} /> <p>{TourContent.groupsize}</p></div></div>
      <div className="grid-sec2"><p>{TourContent.price}</p> 
      <Link to={`/TourContent/${TourContent.id}`}>BOOK NOW</Link></div>
    </div>
  </div>
  })}
      
</motion.div>

    

</div>
    
  )
}

export default MainTour