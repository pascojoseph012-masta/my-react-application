import React, { use, useState } from 'react'
import './Maintour.css'
import { TourContent } from '../assets/Tour'
import { Link} from 'react-router-dom'
import {motion, useAnimationControls, useInView} from 'framer-motion'




const MainTour = () => {
  const [isHovered, setisHovered] = useState (false)
  const duplicateContent = [...TourContent, ...TourContent, ...TourContent];

  return (
    <div className="whole-tour"

    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    
    >
   <div>
<motion.div 

  animate= {{
    x: isHovered ? undefined : ["0%", "-50%",]
  }}

  transition={{
    x : {
      duration: "17",
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop"
    }
  }}

 className="main-tour">
  {duplicateContent.map((TourContent, index)=>{        
    return <div key={`${TourContent.id}-${TourContent.id}`}> 
            
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

    </div>
  )
}

export default MainTour