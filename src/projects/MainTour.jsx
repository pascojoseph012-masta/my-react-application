import React, { use, useState } from 'react'
import './Maintour.css'
import { TourContent } from '../assets/Tour'

const MainTour = () => {

    const [index, setindex] = useState(0)
    const nexthandle = () =>{
        setindex((previndex)=>(previndex +1 ) % TourContent.length)
    }

    const prevhandal = () =>{
        setindex((prevhandal)=>(prevhandal === 0 ? TourContent.length -1 :prevhandal-1))
    }

    const object = TourContent[index] 

  return (
    <div>
        <div className="tour-cards">

        <div className="main-tour">
            <div className="image-space"><img src={object.image} alt="image" /></div>
            <div className="place"><h1>{object.place}</h1></div>
            <div className="down-side">
            <div className="title"><h1>{object.title}</h1></div>
            <div className="pargraph"><p>{object.description}</p></div>
            <div className="duration"><p><img src="" alt="" />{object.duration}</p> <h1>{object.groupsize}</h1></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainTour