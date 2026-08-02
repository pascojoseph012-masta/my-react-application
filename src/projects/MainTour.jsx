import React, { use, useState } from 'react'
import './Maintour.css'
import { TourContent } from '../assets/Tour'
import { Link, Router, Route } from 'react-router-dom'
import SinglePlace from '../projects/SinglePlace'
import { div } from 'framer-motion/client';
const MainTour = () => {


  return (
    
   <div>
<div className="main-tour">

            {TourContent.map((TourContent)=>{
              
return <div> 
            
            <img src={TourContent.image} alt="image" />
      <div className="downword">
        <h1>{TourContent.place}</h1>
        <h2>{TourContent.title}</h2>
        <h3>{TourContent.description}</h3>
        <div className="grid-sec"> <div className="duration_icon"> <img src={TourContent.duration_icon} alt="" /> <p>{TourContent.duration}</p></div> 
          <div className="group_icon"> <img src={TourContent.groupsize_icon} /> <p>{TourContent.groupsize}</p></div></div>
        <div className="grid-sec2"><p>{TourContent.price}</p> <Link to={`/TourContent/${TourContent.id}`}>BOOK NOW</Link></div>
      </div>
    </div>
    })}
      
</div>

    

</div>
    
  )
}

export default MainTour